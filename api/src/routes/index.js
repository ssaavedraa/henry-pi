const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require('../db');
const db = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {//Traigo la informacion de la API
    const apiUrl = await axios.get('https://restcountries.com/v3/all');//Peticion a la API
    const apiInfo = await apiUrl.data.map(country => {
        if (!country.capital) country.capital = ['N/A']
        return {//retorna unicamente toda la informacion que se necsita para la DB
            id: country.cca3.toUpperCase(),
            name: country.name.common,
            img: country.flags[0],
            continent: country.continents[0],//array
            capital: country.capital[0],//array
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
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}

const getCountry = async (countryId) => {
    return await Country.findAll({
        where: {
            id: countryId,
        },
        include:{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}

router.get('/countries', async(req, res) => {
    let {name} = req.query
    let dbCountries = await getDbInfo();

    if(name){
        if(dbCountries.length === 0){
            return res.status(404).send('Country not found')
        }else{
            let country = await dbCountries.filter(country => country.name.toLowerCase() === name.toLowerCase())
            if(country.length === 0){
                return res.status(404).send('Country not found')
            }
            return res.status(200).send(country)
        }
    }else{

        if(dbCountries.length === 0){
            let apiCountries = await getApiInfo();
            await apiCountries.forEach(async country => {
                let newCountry = {
                    id: country.id,
                    name: country.name,
                    img: country.img,
                    continent: country.continent,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population
                }
                Country.create(newCountry)
            })
            return res.status(200).send(apiCountries)
        }
        return res.status(200).send(dbCountries)
    }

})

router.get('/countries/:countryId', async (req, res) => {
    let {countryId} = req.params
    let country = await getCountry(countryId.toUpperCase())
    if(country){
        return res.status(200).send(country)
    }else{
        return res.status(404).send('Country not found')
    }
})

router.post('/activity', async (req, res) => {
    let {//Todo lo que venga del body
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body

    console.log(name)
    console.log(difficulty)
    console.log(duration)
    console.log(season)
    console.log(countries)

    try{
        let createdActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        let countrieDb = await Country.findAll({
            where:{name: countries}
        })

        createdActivity.addCountry(countrieDb)
        res.status(201).send('Activity created succesfully')
    }
    catch(err){
        res.status(400).send('Wrong data on activity')
    }

    router.post('/activity', async (req, res) => {
        const { name , dificulty, duration, countries } = req.body

        let activityCreated = await Activity.create({
            name,
            dificulty,
            duration,
        });

        let countrieDb = await Country.findAll({
            where: { name: countries}
        });

        activityCreated.addCountry(countrieDb)
        res.send(' creado con exito');
    });
})

module.exports = router;
