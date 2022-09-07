var express = require("express");
const axios = require("axios");
const { Dog } = require("../db.js")
var router = express.Router();

// router.get('/', async (req, res) => {
//     let dogTable = await Dog.findAll()
//     if (!dogTable) {
//         try {
//             let dogs = axios.get("https://api.thedogapi.com/v1/breeds")
//             dogs = dogs.data.map(c => {
//                 return {
//                     id: d.id,
//                     name: d.name,
//                     height: d.height,
//                     weight: d.weight,
//                     life_span: d.life_span
//                 }
//             });
//             await Dog.bulkCreate(dogs)
//             return res.send(dogs)
//         } catch (error) {
//             res.send(error)
//         }
//     } else {
//         res.send(dogTable)
//     }
// })

router.get('/', async (req, res) => {
    // let dogTable = await Dog.findAll();

    let perro = axios.get("https://api.thedogapi.com/v1/breeds");
    perro.then(perro => perro.data.map(d => {
        return {
            id: d.id,
            name: d.name,
            height: d.height.metric,
            weight: d.weight.metric,
            life_span: d.life_span
        }
    }))
        // .then(dogs => Dog.bulkCreate(dogs))
        .then(dogs => res.send(dogs))
        .catch(error => console.error('Inside error:', error))
})

router.get('/?', async (req, res) => {
    let { name } = req.query;
    let perro = axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    return perro
        .then(perro => res.send(perro.data.map(d => {
            return {
                id: d.id,
                name: d.name,
                height: d.height,
                weight: d.weight,
                life_span: d.life_span
            }
        })))
        .catch(error => console.error('Inside error:', error))
})

router.get('/:idRaza', async (req, res) => {
    // let dogTable = await Dog.findAll();
    let { idRaza } = req.params;
    let perro = axios.get("https://api.thedogapi.com/v1/breeds");

    perro.then(perro => perro.data.map(d => {
        return {
            id: d.id,
            name: d.name,
            height: d.height.metric,
            weight: d.weight.metric,
            life_span: d.life_span
        }
    }))
        // .then(dogs => Dog.bulkCreate(dogs))
        // .then(dogs => res.send(dogs))
        .then(dogs => dogs.filter(d => d.id == idRaza))
        .then(dog => res.send(dog))
        .catch(error => console.error('Inside error:', error));

    // .then(dog => res.send(dog))
})


module.exports = router;