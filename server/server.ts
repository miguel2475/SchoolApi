import express from "express";
import bodyParser from "body-parser";
import mysql from 'mysql';

// Controllers (route handlers)
import * as homeController from "./controllers/home";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', homeController.index);
server.get('/users', homeController.users);
server.post('/users/create', homeController.create);

server.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password1·'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();