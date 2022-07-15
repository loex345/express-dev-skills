var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);
//Get /skills/new (functionality - show a form)
router.get('/new', skillsCtrl.new);
//Get /skills show one todd
router.get('/:id', skillsCtrl.show);
//Get skills edit Functionlity - show the form to edit the skill
router.get('/:id/edit', skillsCtrl.edit);
//Post skill (create functionality)
router.post('/', skillsCtrl.create);

module.exports = router;
