const Skill = require('../models/skill');
module.exports = {
    show,
    index,
    new: newSkill,
    edit,
    update,
    create,
    delete:deleteSkill
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
function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill })
}
function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}
function create(req, res) {
 let newId = Skill.create(req.body);
  res.redirect(`/skills/${newId}`);
}
function deleteSkill(req, res) {
   Skill.delete(req.params.id);
   res.redirect('/skills');
}