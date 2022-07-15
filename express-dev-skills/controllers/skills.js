const Skill = require('../models/skill');
module.exports = {
    show,
    index,
    new: newSkill
};

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}
function newSkill(req, res) {
    // render the new.ejs that contains forms
    res.render('skills/new');
}