'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('navigations', [
      {
        name: 'Курсы',
        url: '/courses',
        icon: 'book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Настройки',
        url: '/setting',
        icon: 'setting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пользователи',
        url: '/users',
        icon: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('navigations', null, {});
  }
};
