'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('settings', [
      {
        ip: '127.0.0.1',
        port: 8080,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('settings', null, {});
  }
};
