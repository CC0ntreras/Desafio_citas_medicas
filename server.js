//Imports
const express = require('express');
const axios = require('axios');
const uuid = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

//API Random User
async function obtenerUsuarioAleatorio() {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    const user = response.data.results[0];

// Formatear datos del usuario
    const nombre = user.name.first;
    const apellido = user.name.last;
    const id = uuid.v4();
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');

    return { nombre, apellido, id, timestamp };
  } catch (error) {
    console.error('Error al obtener usuario aleatorio:', error.message);
    throw error;
  }
}

//Registros
const mujeres = [
  { nombre: 'Vicenta', apellido: 'Marin', id: '37adc3', timestamp: 'November 4th 2021, 7:32:35 pm' },
  { nombre: 'Manuela', apellido: 'Ramos', id: '27db77', timestamp: 'November 4th 2021, 7:32:37 pm' },
  { nombre: 'Nadia', apellido: 'Marie', id: 'eb23al', timestamp: 'November 4th 2021, 7:32:47 pm' },
  { nombre: 'Anais', apellido: 'Meunier', id: 'a51620', timestamp: 'November 4th 2021, 7:32:54 pm' },
  { nombre: 'Grace', apellido: 'Green', id: 'ea4c12', timestamp: 'November 4th 2021, 7:32:57 pm' },
  { nombre: 'Vildan', apellido: 'Tahincioglu', id: '30a5c6', timestamp: 'November 4th 2021, 7:33:00 pm' },
  { nombre: 'Silvia', apellido: 'Westhof', id: '107d62', timestamp: 'November 4th 2021, 7:33:03 pm' }
];

const hombres = [
  { nombre: 'Luis', apellido: 'Lango', id: '38eecl', timestamp: 'November 4th 2021, 7:32:40 pm' },
  { nombre: 'Cooper', apellido: 'Wood', id: '7d67fa', timestamp: 'November 4th 2021, 7:32:43 pm' },
  { nombre: 'Patrick', apellido: 'Lee', id: '8bIaa2', timestamp: 'November 4th 2021, 7:33:06 pm' },
  { nombre: 'Tracy', apellido: 'Reynolds', id: '37cc96', timestamp: 'November 4th 2021, 7:33:10 pm' }
];

//Usuarios registrados
app.get('/usuarios', (req, res) => {
  const usuarios = {
    mujeres,
    hombres
  };

  //Chalk
  console.log(chalk.bgWhite.blue('Usuarios Registrados con Chalk:'));
  console.log(chalk.bgWhite.blue(JSON.stringify(usuarios, null, 2)));

  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Nuevo user
app.post('/registro', (req, res) => {

    res.send('Usuario registrado exitosamente');
  });