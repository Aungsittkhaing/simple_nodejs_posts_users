const router = require('express').Router();
const controller = require('../controllers/post');

router.get('/', controller.all);

router.post('/', controller.post);

router.route('/:id')
.get( controller.get)
.patch( controller.patch)
.delete( controller.drop)

// router.patch('/:id', (req, res) => {
//     res.json({msg : 'Edit id is ' + req.params.id});
// });
// router.delete('/:id', (req, res) =>{
//     res.json({msg : 'Delete id is ' + req.params.id});
// });
module.exports = router;