module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    username: {
      unique: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wallet_address: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      Enumerator: ["ACTIVE", "INACTIVE"],
      allowNull: false,
      defaultValue: "INACTIVE",
    },
    confirmationCode: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    },
  });

  return User;
};
