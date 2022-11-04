module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_seller: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      id_buyer: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      id_event: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
  
    return Transaction;
  };