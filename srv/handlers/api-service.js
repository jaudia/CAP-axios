const cds = require('@sap/cds');
const axios = require('axios');


module.exports = cds.service.impl((srv) => {

    srv.on('READ', 'Tools', async (req) => {
        const filtro = '?$expand=ShortDesc';

        let resultado = await getExterno('Tools', filtro, req);

        req.reply(resultado);
    });

    srv.on('READ', 'ServiceDetailss', async (req) => {

        const filtro = '?$expand=ShortName';

        let resultado = getExterno('ServiceDetailss', filtro, req);

        req.reply(resultado);
    });

});

const getExterno = async (entidad, filtro, req) => {
    let resultado;

    const config = {
        method: 'get',
        url: `https://platformxv1ad17b8dc3.eu1.hana.ondemand.com/platformx_v1/platformx.svc/${entidad}${filtro}`,
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            resultado = response.data;
        })
        .catch(function (error) {
            resultado = error;
        });
    return resultado;
}
