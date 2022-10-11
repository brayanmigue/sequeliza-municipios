import { Sequelize } from 'sequelize';
import { useMunicipio } from './models/municipios.js';
import { useUsers } from './models/users.js';

const sequelize = new Sequelize('database_prueba', 'root', '', {
  host: 'localhost',
  dialect:  'mysql'
});

const Munic = useMunicipio(sequelize, Sequelize);
const User = useUsers(sequelize, Sequelize);


export {
    Munic,
    User
}