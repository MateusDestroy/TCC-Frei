import initdb from './models/init-models.js' 
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'mysql_17753_nsftcc',
'nsftcc',
'nsf@tcc', {
host: 'my01.winhost.com',
dialect: 'mysql',
<<<<<<< HEAD
logging: console.logging
=======
logging: console.log
>>>>>>> 8b7196a1a6517b16fdb2b8796515dc5dec186bdf
});
const db = initdb(sequelize);

export default db;