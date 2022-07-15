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
//Delete functionality
router.delete('/:id', skillsCtrl.delete); //works
//Put /todos /:id (Update Functionality)
router.put('/:id', skillsCtrl.update);

module.exports = router;
