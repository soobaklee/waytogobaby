var Share = require('../models/share');

module.exports = {
    index,
    create,
    show,
    // deleteItem,
    createComment
    
}

// async function index(req, res) {
//     const items = await Share.find({}).populate('postedBy')
//     return res.json(items);
// }

// function index(req, res) {
//     Share.find({}).populate('postedBy')
//     .then(item => {
//         res.status(200).json(item);
//     });
// }

function index(req, res) {
    Share.find({}, function(err, items) {
        res.json(items);
    });
}

function create(req, res) {
    console.log(req.body);
    const newShare = new Share({
        title: req.body.item.title,
        description: req.body.item.description,
        postedBy: req.body.item.postedBy._id

    });
    newShare.save().then(newItem => res.json(newItem));
    // try {
    //     await Share.create(req.body);
    //     index(req, res);
    // } catch(err) {
    //     res.json(err);
    // }
}

function show(req, res, next) {
    Share.findById(req.params.id).populate('postedBy').populate('comments.postedBy')
    .exec(function(err, item) {
        if(err) return next(err);
        res.json(item);
    })
}

// function newItem(req, res) {
//     res.render('share/new', {
//         user: req.user
//     });
// }

// function deleteItem(req, res, next) {
//     Share.findByIdAndRemove(req.params.id, function (err) {
//         if(err) return next(err);
//     });
// }

async function createComment(req, res) {
    // try {
    //     const itemComment = await new Share.findById(req.params.id, function (err, item) {
    //     item.comments.push({ postedBy: req.user, content: req.body.content });
    //     item.save(function (err) {
    //         console.log(err);
    //     });
    // });
    try {
        await Share.findById(req.params.id, function(err, item) {
            item.comments.push({ postedBy: req.user, content: req.body.content });
            item.save();
        })
    } catch (err) {
        res.json(err)
    }
}
