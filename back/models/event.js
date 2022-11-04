module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    type: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    event_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    localisation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    id_categorie: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    contractAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    organisatorWallet: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    scannedArray: {
      type: Sequelize.JSON,
      allowNull: true,
    },
  });

  return Event;
};