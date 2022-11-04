module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categorie", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          categorie_name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          image_url: {
            type: Sequelize.STRING,
            allowNull: true
          }
    });
  
    return Categorie;
  };