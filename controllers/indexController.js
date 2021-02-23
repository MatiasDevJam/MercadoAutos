module.exports = {
    index : (req, res) =>{
        res.render('home', {
            title : "Mercado Autos",
            mensaje : "Bienvenido a mi sitio"

        })
    },
    about : (req, res) =>{
        res.render('about')
    }
}