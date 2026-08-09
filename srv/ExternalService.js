const cds = require('@sap/cds')

module.exports = class ExternalService extends cds.ApplicationService {
  init() {

    const { ExternalProducts } = cds.entities('capm_s4h_extrnl_01.ramdas.ExternalService')

    // this.before (['CREATE', 'UPDATE'], ExternalProducts, async (req) => {
    //   console.log('Before CREATE/UPDATE ExternalProducts', req.data)
    // })
    // this.after ('READ', ExternalProducts, async (externalProducts, req) => {
    //   console.log('After READ ExternalProducts', externalProducts)
    // })

    this.on('READ', ExternalProducts, async (req) => {
      const service = await cds.connect.to('NorthWind_metadata');
      return service.tx(req).run(req.query);
    })

    return super.init()
  }
}
