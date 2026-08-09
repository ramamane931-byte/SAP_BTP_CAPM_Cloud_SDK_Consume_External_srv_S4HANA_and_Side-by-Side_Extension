namespace capm_s4h_extrnl_01.srv;

using {OP_API_SALES_ORDER_SRV_0001 as sordapi} from './external/OP_API_SALES_ORDER_SRV_0001';

service CatalogService @(path: 'SalesOrder') {

    entity mySalesOrder as projection on sordapi.A_SalesOrder;
}
