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
    //some reason user_id of value 1 does not exist, Key(users_id)=(1) is not present in table users
    await queryInterface.bulkInsert("address", [
      { address: "82 Lim Chu Kang Rd", users_id: 1 },
      { address: "72 Nanyang Avenue 10", users_id: 2 },
      { address: "18 Hougang Avenue 6", users_id: 1 },
      { address: "54 Nanyang Avenue 7", users_id: 3 },
      { address: "25 Tampines West Street 81", users_id: 1 },
      { address: "93 Nanyang Avenue 2", users_id: 2 },
      { address: "104 Jurong East Street 82", users_id: 3 },
    ]);
    //some reason user_id of value 1 does not exist, Key(users_id)=(1) is not present in table users
    await queryInterface.bulkInsert("orders", [
      { users_id: 1, total: 690 },
      { users_id: 1, total: 0 },
      { users_id: 3, total: 420 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("address")
    await queryInterface.bulkDelete("orders")
  }
};
