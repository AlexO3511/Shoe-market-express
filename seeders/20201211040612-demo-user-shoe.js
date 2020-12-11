'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let artists = await queryInterface.bulkInsert("Users", [
      { name: "Alex Overstreet", username: "AlexO", password: "test", email: "Jamesoverstreet48@gmail.com" },
      { name: "Test", username: "Test", password: "test", email: "Test" },
    ]);

    let shoes = await queryInterface.bulkInsert("Shoes", [
      { brand: "Jordan", make: "Retro 1", colorway: "Red/Black/White", retailPrice: 220, value: 350, imageLink: "www.google.com", userId: 1 },
      { brand: "Jordan", make: "Retro 3", colorway: "Red/Black/White", retailPrice: 220, value: 450, imageLink: "www.google.com", userId: 2 },
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
