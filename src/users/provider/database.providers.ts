
import { Sequelize } from 'sequelize-typescript';
import { logintable } from '../entity/login.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'task2',
      });
      sequelize.addModels([logintable]);
      await sequelize.sync();
      return sequelize;
    },
  },
];