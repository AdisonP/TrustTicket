const dbConfig = require("../database/db.config.js");

const Sequelize = require("sequelize");
const user = require("./user.js");
const { DB } = require("../database/db.config.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(sequelize, Sequelize);
db.Categorie = require("./categorie.js")(sequelize, Sequelize);
db.Artist = require("./artist.js")(sequelize, Sequelize);
db.Event = require("./event.js")(sequelize, Sequelize);
db.roles = require("../models/roles.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);
db.Transaction = require("./transaction.js")(sequelize, Sequelize);
db.Picture = require("./picture.js")(sequelize, Sequelize);

// DB USER HAS MANY EVENTS && EVENTS HAS ONE USER

/* db.roles.belongsToMany(db.User, {
  through: "roles",
  foreignKey: "rolesId",
  otherKey: "userId"
});
db.User.belongsToMany(db.roles, {
  through: "roles",
  foreignKey: "userId",
  otherKey: "rolesId"
});
db.refreshToken.belongsTo(db.User, {
  foreignKey: 'userId', targetKey: 'id'
});
db.User.hasOne(db.refreshToken, {
  foreignKey: 'tokenId', targetKey: 'id'
});
 */



//db.User.hasMany(db.Event, { as: "Event" });
db.Event.belongsTo(db.User, {
  foreignKey: "id_organisator",
  as: "organisator",
});


db.Event.belongsToMany(db.Artist, {
   through: 'EventArtists', 
   foreignKey: "id_event",
as: "artist" });

db.Artist.belongsToMany(db.Event,{
   through: 'EventArtists',
  foreignKey: "id_artist",
as: "event" });


db.Event.belongsTo(db.Categorie, {
  foreignKey: "id_categorie",
  as: "categorie",
});

db.Transaction.belongsTo(db.User, {
  foreignKey: "id_seller",
  as: "seller",
});

db.Transaction.belongsTo(db.User, {
  foreignKey: "id_buyer",
  as: "buyer",
});

db.Transaction.belongsTo(db.Event, {
  foreignKey: "id_event",
  as: "event",
});

db.User.belongsTo(db.roles, {
  foreignKey: "role_id",
  as: "roles",
});

// db.Transaction.belongsTo(db.User, {
//   foreignKey: "id_buyer",
//   as: "buyer",
// });

db.refreshToken.belongsTo(db.User, {
  foreignKey: 'userId', targetKey: 'id'
});
db.User.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

// db.User.hasOne(db.roles, {
//   foreignKey: 'role_id', targetKey: 'id'
// });


// db.User.hasMany(db.Event, { as: "Event" });
// db.Event.belongsTo(db.User, {
//   foreignKey: "id_artist",
//   as: "User",
// });

// db.Event.hasOne(db.User, {
//   foreignKey: {
//     name: "id_seller",
//     allowNull: false,
//   },
//   as: "seller",
// })

// DB USER HAS ONE PICTURE
db.User.hasOne(db.Picture, {
  foreignKey: "id_user",
});
db.Picture.belongsTo(db.User, {
  foreignKey: "id_user",
  as: "user",
});
// DB ARTIST HAS ONE PICTURE
db.Artist.hasOne(db.Picture, {
  foreignKey: "id_artist",
});
db.Picture.belongsTo(db.Artist, {
  foreignKey: "id_artist",
  as: "artist",
});
// DB EVENT HAS ONE PICTURE
db.Event.hasOne(db.Picture, {
  foreignKey: "id_event",
});
db.Picture.belongsTo(db.Event, {
  foreignKey: "id_event",
  as: "event",
});

db.Event.hasOne(db.Picture, { as: "pictures" });
db.User.hasOne(db.Picture, { as: "pictures" });
db.Artist.hasOne(db.Picture, { as: "pictures" });


module.exports = db;