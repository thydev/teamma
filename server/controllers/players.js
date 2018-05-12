const mongoose = require('mongoose'),
        Player = mongoose.model('Player');

module.exports = {

    retrieveAll : (req, res) => {
        Player.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        }).sort({ name: 1 });
    },

    retrieveById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Player.find({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Player(req.body);
        item._id = new mongoose.Types.ObjectId();
        // item.name = req.body.name;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json({message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        // Player.where({_id: new ObjectId(req.params.id)})
        //     .update({$set: {
        //         name: req.body.name,
        //     }})
        //     .exec((err, item)=>{
        //         if (!err) {
        //             res.json({message: "Success", data: item});
        //         } else {
        //             console.log(err);
        //             res.json( {message: "Error", error: err})
        //         }
        //     });
        const update = req.body;
        const opts = { runValidators: true };
        Player.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
            if (!err) {
                res.json({message: "Success", data: item});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Player.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },

    // createQuote: (req, res) => {
    //     const ObjectId = mongoose.Types.ObjectId; 
    //     Player.findOne({_id: new ObjectId(req.params.id)})
    //         .exec((err, item)=>{
    //             if (!err) {
    //                 item.quotes.push({ content: req.body.content });
    //                 item.save((err2, item2) => {
    //                     if (err2) {
    //                         res.json({message: 'Error', error: err2});
    //                     } else {
    //                         res.json({message: "Success", data: item2});
    //                     }
    //                 });
    //             } else {
    //                 res.json({message: "Error", error: err})
    //             }
    //         });
    // },

    // voteQuote: (req, res) => {
    //     console.log(req.body);
    //     const ObjectId = mongoose.Types.ObjectId; 
    //     Player.findOne({_id: new ObjectId(req.params.id)})
    //         .exec((err, item)=>{
    //             if (!err) {
    //                 let q = item.quotes.id(req.body.quote_id);
    //                 q.vote = parseInt(q.vote) + parseInt(req.body.vote);
    //                 item.save((err2, item2) => {
    //                     if (err2) {
    //                         res.json({ message: 'Error2', error: err2});
    //                     } else {
    //                         res.json({message: "Success", data: item2});
    //                     }
    //                 });
    //             } else {
    //                 res.json( {message: "Error1", error: err})
    //             }
    //         });

    // },

    // deleteQuote: (req, res) => {
    //     const ObjectId = mongoose.Types.ObjectId; 
    //     Player.findOne({_id: new ObjectId(req.params.id)})
    //         .exec((err, item)=>{
    //             if (!err) {
    //                 item.quotes.id(req.params.quote_id).remove();
    //                 item.save((err2, item2) => {
    //                     if (err2) {
    //                         res.json({ message: 'Error', error: err2});
    //                     } else {
    //                         res.json({message: "Success", data: item2});
    //                     }
    //                 });
    //             } else {
    //                 res.json( {message: "Error", error: err})
    //             }
    //         });
    // }

}