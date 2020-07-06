'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('courses', [
      {
        name: 'React',
        description: 'Курс по React.js',
        price: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vue',
        description: 'Курс по Vue.js',
        price: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular',
        description: 'Курс по Angular',
        price: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
