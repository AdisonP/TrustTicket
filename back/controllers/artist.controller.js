const db =  require("../models");
const Artist = db.Artist;
const { Op, sequelize } = require("sequelize");



exports.create = (req, res) => {
    const artist = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    Artist.create(artist)
        .then((data) => {
        res.send({
            message : "ok"
        })
          console.log(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erreur lors de la création de l'event",
            });
        });
};


exports.sort = async (req, res) => {
    var listArtist = []

    //sort by name 
    
        Artist.findAll({where : {
            name: {
                [Op.regexp]: `.*${req.body.name == undefined ? "" : req.body.name}.*`
              }
        }}).then((re) => (
            res.send(re)
        ))
    

    // if(req.body.event)
    // for (let i = 0; i < req.body.event.length; i++) {
    //     const element = req.body.event[i];
    //     await db.Event.findByPk(element).then((ev) => {
    //         ev.getArtist().then((arts) => {
    //             if(arts){
    //                 //console.log("-------> "+)
    //                 for (let u = 0; u < arts.length; u++) {
    //                     const a = arts[u];
    //                     listArtist.push({
    //                         id: a.id,
    //                         name: a.name,
    //                     });

    //                     // if(!listArtist.filter(ele => {id.id != ele.id}).length > 0){
    //                     //     listArtist.push(a);
    //                     // }
    //                 }
    //                 console.log(listArtist)
    //             }
    //         })
    //     })
        
    // }
   // res.send(listArtist)
    // Artist.findByPk(3).then((a)=> {
    //     a.getEvent().then((e)=> {
    //         res.send(e)
    //     })
    // })
}