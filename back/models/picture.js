module.exports = (sequelize, Sequelize) => {
  const Picture = sequelize.define("picture", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    path: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  });

  return Picture;
};
