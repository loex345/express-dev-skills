const Skill = require('../models/skill');
module.exports = {
    show,
    index
};

function show(req, res){
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res){
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}