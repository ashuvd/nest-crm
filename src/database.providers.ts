import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import models from './models';
import db from './config/db';

export const databaseProviders: Provider[] = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      db.authenticate()
        .then(()=> {
          console.log('Connection has been established successfully');
        })
        .catch((error) => {
          console.error('Unable to connect to the database', error);
        })
      db.addModels(models);
      // await db.sync();
      return db;
    }
  }
]
