'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        login: 'admin',
        password: '$2a$10$QPLogM0.TaKZW2J07phcreZELgNkyutwqHRqpB2ZZ5zY8s8TuBi.6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'user',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'driver',
        password: '777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
