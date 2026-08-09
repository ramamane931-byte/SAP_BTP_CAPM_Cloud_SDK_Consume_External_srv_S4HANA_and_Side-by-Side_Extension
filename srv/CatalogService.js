const cds = require('@sap/cds')
const { config } = require('dotenv')

module.exports = class CatalogService extends cds.ApplicationService {
  init() {
    require('dotenv').config();

    const { mySalesOrder } = cds.entities('capm_s4h_extrnl_01.srv.CatalogService')

    // this.before (['CREATE', 'UPDATE'], mySalesOrder, async (req) => {
    //   console.log('Before CREATE/UPDATE mySalesOrder', req.data)
    // })
    // this.after ('READ', mySalesOrder, async (mySalesOrder, req) => {
    //   console.log('After READ mySalesOrder', mySalesOrder)
    // })

    //code which usage the boilerplate code to fetch sales orders from sap s/4hana
    var getAllSalesOrders = async function () {
      const { opApiSalesOrderSrv0001 } = require('./src/generated/OP_API_SALES_ORDER_SRV_0001')
      const { salesOrderApi } = opApiSalesOrderSrv0001();
      const dataSales = await salesOrderApi.requestBuilder().getAll().top(30).
        select(
          salesOrderApi.schema.SALES_ORDER,
          salesOrderApi.schema.SALES_ORGANIZATION,
          salesOrderApi.schema.SALES_ORDER_TYPE,
          salesOrderApi.schema.SOLD_TO_PARTY,
          salesOrderApi.schema.PAYMENT_METHOD,
          salesOrderApi.schema.TO_ITEM
        )
        .execute({
          destinationName: "S4HANA_2"
          // "url": process.env.URL,
          // "username": process.env.USER,
          // "password": process.env.PASSWORD
        });

      return dataSales;
    }

    this.on('READ', mySalesOrder, async (req) => {

      return await getAllSalesOrders().then(
        salesDataTable => {
          var aRecord = [];
          console.log(salesDataTable);
          salesDataTable.forEach(element => {
            var item = {};
            item.SalesOrder = element.salesOrder;
            item.SalesOrganization = element.salesOrganization;
            item.SalesOrderType = element.salesOrderType;
            item.SoldToParty = element.soldToParty;
            item.PaymentMethod = element.paymentMethod;
            if (element.toItem[0]) {
              item.Material = element.toItem[0].material;
              item.RequestedQuantity = element.toItem[0].requestedQuantity;
              item.NetAmount = element.toItem[0].netAmountetAmount;
            } else {
              item.Material = "";
              item.RequestedQuantity = "";
              item.NetAmount = "";
            }
            aRecord.push(item);
          });
          return aRecord;
        }
      );

    });


    this.on('CREATE', mySalesOrder, async (req) => {

      let payload = req.data;
      const moment = require('moment');
      const { opApiSalesOrderSrv0001 } = require('./src/generated/OP_API_SALES_ORDER_SRV_0001')
      const { salesOrderApi, salesOrderItemApi } = opApiSalesOrderSrv0001();

      try {

        const salesOrderNew = salesOrderApi.entityBuilder()
          .salesOrderType(payload.SalesOrderType)
          .salesOrganization(payload.SalesOrganization)
          .distributionChannel(payload.DistributionChannel)
          .organizationDivision(payload.OrganizationDivision)
          .salesDistrict(payload.SalesDistrict)
          .soldToParty(payload.SoldToParty)
          .salesOrderDate(moment(payload.salesOrderDate))
          .build();
        const salesItemNew = payload.to_Item.results.map(item => {
          return salesOrderItemApi.entityBuilder()
            .salesOrderItem(item.SalesOrderItem)
            .material(item.Material)
            .requestedQuantity(item.RequestedQuantity)
            .requestedQuantityUnit(item.RequestedQuantityUnit)
            .build();
        });

        salesOrderNew.toItem = salesItemNew;
        console.log(salesOrderNew)
        const result = await salesOrderApi
          .requestBuilder()
          .create(salesOrderNew)
          .execute({
            destinationName: "S4HANA_2"
            // "url": process.env.URL,
            // "username": process.env.USER,
            // "password": process.env.PASSWORD
          });

        return result;
      } catch (error) {
        req.error(500, error.message);
      }

    });

    return super.init()
  }
}
