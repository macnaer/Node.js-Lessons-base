const Sequelize = require("sequelize");

const sequelize = new Sequelize("NodeBlog3", "NodeBlog3", "NodeBlog3", {
    dialect: 'mysql',
    host: "10.7.101.244"
});


module.exports = sequelize;