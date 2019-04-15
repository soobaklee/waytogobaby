var Advice = require('../models/advice');

module.exports = {
    index,
    needAdvice,
    show,
    create
}


function index(req, res, next) {
    Advice.find({}).populate('postedBy')
    .then(advice => {
        res.status(200).json(advice);
    })
    // Advice.find({}).populate('postedBy').populate('responses.postedBy').exec(function (err, advice) {
    //     res.render('advice/index', {
    //         user: req.user,
    //         advice
    //     });
    // });
}

function needAdvice(req, res) {
    res.render('advice/new', {
        user: req.user
    });
}

function show(req, res) {
    Advice.findById(req.params.id)
        .populate('postedBy')
        .exec((err, advice) => {
            res.json({advice: advice})
        //     res.render('advice/show', {
        //         postedBy: advice.postedBy,
        //         user: req.user,
        //         advice
        //     });
        });

}

function create(req, res) {
    var advice = new Advice(req.body);
    // advice.postedBy = req.user._id;
    advice.save(function (err) {
        if (err) return res.redirect('/advice/new');
        res.redirect(`/advice/${advice._id}`);
    });
}