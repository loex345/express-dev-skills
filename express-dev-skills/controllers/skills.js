const skill = require('../models/skill');
module.exports = {
    index,
    show
};

function show(req, res){
    const skill = skill.getOne(req.para.id);
    res.render('skills/show', { skill });
}

function index(req, res){
    const skills = skill.getAll();
    res.render('skills/index', { skills });
}