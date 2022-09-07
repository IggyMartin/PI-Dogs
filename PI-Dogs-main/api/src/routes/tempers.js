var express = require("express");
const axios = require("axios");
// const { Temper } = require("../db.js")
var router = express.Router();


router.get('/', async (req, res) => {
    let temperaments = axios.get("https://api.thedogapi.com/v1/breeds");
    temperaments.then(temperaments => temperaments.data.map(d => { return { temperament: d.temperament } }))
        .then(temperaments => {

            let aux = []
            for (const temp of temperaments) {
                if (temp['temperament']) {
                    let t = temp['temperament']
                    t = t.split(',')
                    aux.push(...t)
                }
            }

            let result = aux.filter((item, index) => { return aux.indexOf(item) === index });
            let trimed = [];
            result.forEach(r => {
                r = r.trim()
                trimed.push(r)
            });
            result = [...trimed];
            res.send(result);
        })
        .catch(error => console.error('Inside error:', error))
})

module.exports = router;