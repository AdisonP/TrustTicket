const db = require("../models");
const Role = db.roles;
const Categorie = db.Categorie;
const Artist = db.Artist;

const User = db.User;
const Picture = db.Picture;
var bcrypt = require("bcrypt");

// DB UTILS 
exports.buildDb = async () => {
  // Roles 
  Role.create({ name: "user" })
    .then((data) => {
      console.log("role user => OK");
    })
    .catch((err) => {
      console.log("role user => KO \n" + err);
    });
  Role.create({ name: "organisator" })
    .then((data) => {
      console.log("role organisator => OK");
    })
    .catch((err) => {
      console.log("role organisator => KO \n" + err);
    });
  // Categorie
  Categorie.create({ categorie_name: "Concert" })
    .then((data) => {
      console.log("categorie concert => OK");
    })
    .catch((err) => {
      console.log("categorie concert => KO \n" + err);
    });
  Categorie.create({ categorie_name: "Festival" })
    .then((data) => {
      console.log("categorie festival => OK");
    })
    .catch((err) => {
      console.log("categorie festival => KO \n" + err);
    });
  Categorie.create({ categorie_name: "Événement Sportif" })
    .then((data) => {
      console.log("categorie concert privé => OK");
    })
    .catch((err) => {
      console.log("categorie concert privé => KO \n" + err);
    });
  Categorie.create({ categorie_name: "Arts & Culture" })
    .then((data) => {
      console.log("categorie séminaire => OK");
    })
    .catch((err) => {
      console.log("categorie séminaire => KO \n" + err);
    });
  Categorie.create({ categorie_name: "Cinéma" })
    .then((data) => {
      console.log("categorie evenement => OK");
    })
    .catch((err) => {
      console.log("categorie evenement => KO \n" + err);
    });
  Categorie.create({ categorie_name: "Conventions" })
    .then((data) => {
      console.log("categorie sport => OK");
    })
    .catch((err) => {
      console.log("categorie sport => KO \n" + err);
    });
  // Artist 

  Artist.create({
    name: "Jul",
    email: "Jul@lesang.fr",
    phone: 23232323
  }).then((data) => {
    console.log("artist Jul => OK");
  })
    .catch((err) => {
      console.log("artist Jul => KO \n" + err);
    });

  Artist.create({
    name: "AC/DC",
    email: "acdc@rock.fr",
    phone: 23232323
  }).then((data) => {
    console.log("artist ACDC => OK");
  })
    .catch((err) => {
      console.log("artist ACDC => KO \n" + err);
    });


  // UsER 

  User.create({
    name: "John",
    firstname: "Doe",
    username: "123",
    password: bcrypt.hashSync("123", 8),
    email: "johndoe@mail.com",
    phone: "+3365234E34",
    wallet_address: "",
    address: "",
    role: 2
  }).then((data) => {
    console.log("User de test créer => OK")
  })
    .catch((err) => {
      console.log("user de test non créer => KO \n " + err)
    })
}


// USER UTILS 

// Check if userid exist 
exports.checkIfUserExist = (id) => {
  return db.User.count({ where: { id: id } })
    .then(count => {
      return count != 0;
    });
}

// Check if role name exist 
exports.checkIfRoles = (name) => {
  return db.roles.count({ where: { name: name } })
    .then(count => {
      return count != 0;
    });
}
// Check if user mail exist 
exports.checkUserMail = (email) => {
  return db.User.count({ where: { email: email } })
    .then(count => {
      return count != 0;
    });
}


// Check if user wallet exist 
exports.checkIfWalletExist = (address) => {
  return db.User.count({ where: { wallet_address: address } })
    .then(count => {
      return count != 0;
    });
}

// Check if user username exist 
exports.checkIfUserNameExist = (username) => {
  return db.User.count({ where: { username: username } })
    .then(count => {
      return count != 0;
    });
}

// ARTIST UTILS ------------

// Check if artist name exist 
exports.checkIfArtistExist = (name) => {
  return db.Artist.count({ where: { name: name } })
    .then(count => {
      return count != 0;
    });
}

// ORGANISATOR UTILS ------------

// TODO : return undefined quand appelé ? mais fonctionne 
// Check if organisator id exist 
exports.checkIfOrganisatorExist = (id) => {
  return db.User.findByPk(id).then(user => {
    user.getRoles().then(roles => {
      return roles.name == "organisator";
    })
  });
  ;
}


// CATEGORIE UTILS ------------

// Check if categorie name exist 
exports.checkIfCategorieExist = (name) => {
  return db.Categorie.count({ where: { name: name } })
    .then(count => {
      return count != 0;
    });
}


// exports.ArtistSetEvent = async (idArtist, idEvent) => {
//   await db.Event.findOne({where : {id : idEvent}}).then(async (event) => {
//     const artist = await db.Artist.findOne({where : { id : idArtist}}).then((art) => {
//       console.log("----------toto" + event)
//       //artist.setEvent(event);
//     })
//   })
// }