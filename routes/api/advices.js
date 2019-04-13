const express = require('express');
const router = express.Router();
const advicesCtrl = require('../../controllers/advices');

//Do I need to require anything for my images?

router.get('/', advicesCtrl.index);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, advicesCtrl.create);


/* GET users listing. */
// router.get('/', advicesCtrl.index);
// router.get('/new', checkAuth, advicesCtrl.new);
// router.get('/:id', advicesCtrl.show);
// router.post('/', checkAuth, advicesCtrl.create);
// router.delete('/:id', checkAuth, advicesCtrl.delete);
// router.get('/:id/edit', checkAuth, advicesCtrl.edit);
// router.put('/:id', checkAuth, advicesCtrl.update);



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}


module.exports = router;