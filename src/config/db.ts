import config from './index';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

export default new Sequelize({
  dialect: 'postgres',
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database
} as SequelizeOptions);
