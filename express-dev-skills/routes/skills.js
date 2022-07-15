var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);
//Get /skills/new (functionality - show a form)
router.get('/new', skillsCtrl.new);
//Get /skills show one todd
router.get('/:id', skillsCtrl.show);

module.exports = router;
