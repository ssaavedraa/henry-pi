const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {//Traigo la informacion de la API
    const apiUrl = await axios.get('https://restcountries.com/v3/all');//Peticion a la API
    const apiInfo = await apiUrl.data.map(country => {
        return {//retorna unicamente toda la informacion que se necsita para la DB
            id: country.cca3,
            name: country.name.common,
            img: country.flags.svg,
            continent: country.continents,//array
            capital: country.capital,//array
            subregion: country.subregion,
            area: country.area,//bigint
            population: country.population//bigint
        }
    })
    return apiInfo
}

const getDbInfo = async () => {//trae toda la informacion almacenada ne la DB
    return await Country.findAll({
        include:{
            model:Activity,
            attributes: ['name'],//que atributos quiero que se incluyan
            through: {
                attributes: [],
            }
        }
    })
}

const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

router.get('/', (req, res) => {
    res.send('Server working')
})

router.get('/countries', async(req, res) => {
    const countryId = req.query.countryId
    let totalCountries = await getAllCountries();
    if(countryId){
        let countryName = await totalCountries.filter(country => country.id.toUpperCase().includes(countryId.toUpperCase()))
        countryName ? res.status(200).send(countryName) : res.status(404).send('No se encuentra el país')//Busca ? encontraste : no encontraste
    }else{
        res.status(200).send(totalCountries);
    }
})

router.post('/activity', async (req, res) => {
    let {//Todo lo que venga del body
        name,
        difficulty,
        duration,
        season
    } = req.body

})

module.exports = router;
