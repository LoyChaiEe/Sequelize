'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("fruits", [
      { name: "Apple", taste: "Sweet", colour: "Red", stock: 140, price: 1 },
      { name: "Banana", taste: "Sweet", colour: "Red", stock: 200, price: 1 },
      { name: "Kiwi", taste: "Sour", colour: "Red", stock: 90, price: 2 },
    ]);

    await queryInterface.bulkInsert("users", [
      { name: "Pewdiepie", email: "idk@gmail.com", password: "12345" },
      { name: "Lumine", email: "rebirth@gmail.com", password: "abcde" },
      { name: "Rebirth", email: "sniper@gmail.com", password: "360noscope" },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("fruits")
    await queryInterface.bulkDelete("users");
  }
};
