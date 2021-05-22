//Cargue la conexion del grupo MySql
const { request, response } = require('express');
const pool = require('../data/config');

// ruta de la app
const router = app =>{
    
// Mostrar mensaje de bienvenida de root
    app.get('/', (resquest, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });
//Mostrar todos los usuarios
    app.get('/users', (request,response) =>{
        pool.query('SELECT * FROM users', (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

// Mostrar un solo usuario po ID
app.get('/users/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo usuario
app.post('/users', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send('User added with ID: ${result.insertId}');
    });
});

//Actualizar un usuario existente
app.put('/users/:id', (request, response) =>{
    const id = request.params.id;

    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('User updated successfully.');
    });
});

//Eliminar un usuario
app.delete('/users/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELET FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('User deleted.');
    });
});

//Mostrar todas las escuelas
app.get('/escuela', (request,response) =>{
    pool.query('SELECT * FROM escuela', (error, result) =>{
        if(error) throw error;

        response.send(result);
    });
});

// Mostrar una escuela por ID
app.get('/escuela/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM escuela WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nueva escuela
app.post('/escuela', (request, response) => {
    pool.query('INSERT INTO escuela SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send('School added with ID: ${result.insertId}');
    });
});

//Actualizar una escuela existente
app.put('/escuela/:id', (request, response) =>{
    const id = request.params.id;

    pool.query('UPDATE escuela SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('School updated successfully.');
    });
});

//Eliminar una escuela
app.delete('/escuela/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELET FROM escuela WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('School deleted.');
    });
});



}

//exportar router
module.exports = router;