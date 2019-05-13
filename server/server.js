import express from "express"
import bodyParser from "body-parser"
import routes from "./config/routes.js"
import db from './database.js'

(async () => {

  try{

    await db.sequelize.authenticate()
    global.db = db;

    //Iniciando servidor de peticiones
    const server = express()
    const port = 3000

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(routes)

    server.listen(port, (err) => {
      if(err){
        console.log('Error al intentar crear el servidor')
        db.sequelize.close()
        return
      }
      console.log('Server corriendo en el puerto '+port)
    });

  } catch (e){
    console.error('Unable to connect to the database:', e);
  }

})()
