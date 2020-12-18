'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let artists = await queryInterface.bulkInsert("Users", [
      { name: "Alex Overstreet", username: "AlexO", password: "test", email: "Jamesoverstreet48@gmail.com" },
      { name: "Test", username: "Test", password: "test", email: "Test" },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
