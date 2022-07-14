const Skill = require('../models/skill');
module.exports = {
    show,
    index
};

function show(req, res){
    const skillName = Skill.getOne(req.params.id);
    res.render('skills/show', { skillName });
}

function index(req, res){
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}