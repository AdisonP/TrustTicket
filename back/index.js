const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();


app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'Origin',
      'Content-Length',
      'Accept',
      'X-Requested-With',
    ],
  })
)
//cors allow all origins and credentials for all methods (GET, POST, PUT, DELETE) for all routes 


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// AUTHORISATION FOR PICTURE
app.use(express.static(path.join(__dirname, "public")));

// GLOBAL ROUTE
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Trust Tickets Server." });
});

const db = require("./models");

// UPLOAD FILE
global.__basedir = __dirname;

const { buildDb } = require("./controllers/utils");

// ACTIVE FOR FORCE SYNC

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   buildDb();
// });

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// REQUIRE ROUTES FOLDERS EXAMPLE
require("./routes/user.routes.js")(app);
require("./routes/event.routes.js")(app);
require("./routes/auth.routes.js")(app);
require("./routes/categorie.routes.js")(app);
require("./routes/artist.route.js")(app);
//require("./routes/role.routes.js")(app);

require('./routes/ticketsCreator.routes.js')(app)
require('./routes/upload.route.js')(app)
require('./routes/picture.route.js')(app)
require('./routes/burn.routes.js')(app)
require('./routes/verif.routes.js')(app)
require('./routes/pinata.routes.js')(app)
