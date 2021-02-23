const autos = require('../data/autos')

module.exports = {
    index : (req, res) => {
        res.render('autos', {
            title : "Listado de autos",
            autos
        })
    },
    show : (req, res) => {

        let auto = autos.find(auto =>{
            return auto.id === Number(req.params.id)
        });

    
        res.render('autosShow', {
            title : "Vista de Detalle",
            auto
        })
    },
    search : (req, res) =>{
       const resultado = autos.filter(auto =>{
           return auto.modelo.includes(req.query.busqueda)
       })
       res.render('autos', {
        title : "Resultado de la búsqueda",
        autos : resultado
    })
    }
}