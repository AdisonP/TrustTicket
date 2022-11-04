module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          email: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          phone: {
              type: Sequelize.INTEGER,
              allowNull: true,
          },
          image_url: {
            type: Sequelize.STRING,
            allowNull: true
          }
    });
  
    return Artist;
  };