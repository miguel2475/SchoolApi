import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'

var db = {};

const sequelize = new Sequelize('school', 'root', 'Password1·', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
});

const __dirname = path.join(path.resolve('') , 'server/models');

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db['sequelize'] = sequelize
export default db