const express = require('express');
const router = express.Router();
const sharesCtrl = require('../../controllers/shares');

router.get('/', sharesCtrl.index);

/*-----------Protected Routes-----------*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, sharesCtrl.create);
router.post('/:id/comments', checkAuth, sharesCtrl.createComment);
router.get('/:id', checkAuth, sharesCtrl.show);
// router.delete('/:id', checkAuth, sharesCtrl.delete);
// router.get('/:id/edit', checkAuth, sharesCtrl.edit);
// router.put('/:id', checkAuth, sharesCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;