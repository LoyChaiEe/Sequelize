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
    //same thing with order_id, order_id of value 1 does not exist, Key(users_id)=(1) is not present in table users
    await queryInterface.bulkInsert("ordered_fruit", [
      { order_id: 1, fruit_id: 3, quantity: 90 },
      { order_id: 1, fruit_id: 2, quantity: 20 },
      { order_id: 1, fruit_id: 1, quantity: 10 },
      { order_id: 2, fruit_id: 1, quantity: 190 },
      { order_id: 2, fruit_id: 2, quantity: 70 },
      { order_id: 2, fruit_id: 3, quantity: 120 },
    ]);

    await queryInterface.bulkInsert("cart", [
      { users_id: 1, fruit_id: 3, quantity: 10 },
      { users_id: 1, fruit_id: 2, quantity: 40 },
      { users_id: 1, fruit_id: 1, quantity: 20 },
      { users_id: 3, fruit_id: 1, quantity: 70 },
      { users_id: 3, fruit_id: 2, quantity: 50 },
      { users_id: 3, fruit_id: 3, quantity: 120 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("ordered_fruit");
    await queryInterface.bulkDelete("cart")
  }
};
