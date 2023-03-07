const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

// Recibir datos del archivo JSON
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let datos = JSON.parse(rawdata);
// console.log(datos);

app.get('/', (req, res) => {
    res.render('index', { datosIndex: datos })
});

app.listen('3000', () => {
    console.log('Servicio levantado')
})

