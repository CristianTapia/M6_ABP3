const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

// Recibir datos del archivo JSON
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);
console.log(data.localidad1.Continente);

app.get('/', (req, res) => {
    res.render('index', {pais: data.localidad1.País})
})


app.listen('3000', () => {
    console.log('Servicio levantado');
})

