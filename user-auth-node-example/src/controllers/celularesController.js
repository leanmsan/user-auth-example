// src/controllers/celularesController.js

const db = require('../db'); // O el archivo que estés usando para acceder a la base de datos

const addCelular = (req, res) => {
    const { nombre, modelo, precio } = req.body;

    // Lógica para agregar el celular a la base de datos
    const stmt = db.prepare("INSERT INTO celulares (nombre, modelo, precio) VALUES (?, ?, ?)");
    stmt.run(nombre, modelo, precio, function(err) {
        if (err) {
            return res.status(500).send("Error al insertar el celular");
        }
        res.status(201).send({ id: this.lastID });
    });
    stmt.finalize();
};

const getCelulares = (req, res) => {
    db.all("SELECT * FROM celulares", [], (err, rows) => {
        if (err) {
            return res.status(500).send("Error al obtener los celulares");
        }
        res.status(200).json(rows);
    });
};

module.exports = { addCelular, getCelulares };
