'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let shoes = await queryInterface.bulkInsert("Shoes", [
      { brand: "Jordan", make: "Retro 5 CDP", size: 12, colorway: "Red/Black-Black/White", retailPrice: 300, value: 1600, imageLink: "https://i.imgur.com/KSzWH39.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 6", size: 12, colorway: "White/Blue/Red", retailPrice: 180, value: 360, imageLink: "https://i.imgur.com/S0w1wMa.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 13", size: 12, colorway: "Black/Red", retailPrice: 180, value: 350, imageLink: "https://i.imgur.com/pAwcC2m.jpg", userId: 4 },
      { brand: "Adidas", make: "Yeezy Boost 350", size: 12, colorway: "Pirate Black", retailPrice: 200, value: 2000, imageLink: "https://i.imgur.com/ZgG9l4o.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 6", size: 12, colorway: "White/Red", retailPrice: 180, value: 300, imageLink: "https://i.imgur.com/EqNpvdo.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 6", size: 12, colorway: "Black/Gold", retailPrice: 220, value: 245, imageLink: "https://i.imgur.com/ucZ1arJ.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 4", size: 12, colorway: "White/Red/Black", retailPrice: 220, value: 250, imageLink: "https://i.imgur.com/KpdA84N.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 6", size: 12, colorway: "Cream/Maroon", retailPrice: 180, value: 302, imageLink: "https://i.imgur.com/bTOAGrM.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 9", size: 12, colorway: "Grey/White", retailPrice: 160, value: 660, imageLink: "https://i.imgur.com/KKEJ7p8.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 1", size: 12, colorway: "Black/White/Red", retailPrice: 180, value: 690, imageLink: "https://i.imgur.com/caguIcK.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 12", size: 12, colorway: "Black/Gold", retailPrice: 180, value: 450, imageLink: "https://i.imgur.com/Jdu1B49.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 11", size: 12, colorway: "Black/White/Ice-Blue", retailPrice: 160, value: 445, imageLink: "https://i.imgur.com/gGOPkaU.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 14", size: 12, colorway: "White/Red", retailPrice: 180, value: 315, imageLink: "https://i.imgur.com/fcWRhvo.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 14", size: 12, colorway: "Black/Red", retailPrice: 180, value: 300, imageLink: "https://i.imgur.com/jJnmZ3E.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 7 CDP", size: 12, colorway: "White/Grey/Red", retailPrice: 300, value: 968, imageLink: "https://i.imgur.com/Mx22t59.jpg", userId: 4 },
      { brand: "Jordan", make: "Retro 3", size: 12, colorway: "White/Black/Red", retailPrice: 180, value: 300, imageLink: "https://i.imgur.com/KSIIzPw.jpg", userId: 4 },
      { brand: "Nike", make: "Off-White Presto", size: 12, colorway: "White/Black", retailPrice: 160, value: 1050, imageLink: "https://i.imgur.com/Mx22t59.jpg", userId: 4 },
      { brand: "Nike", make: "Off-White Presto", size: 12, colorway: "Black/White", retailPrice: 160, value: 1150, imageLink: "https://i.imgur.com/KSIIzPw.jpg", userId: 4 },
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
