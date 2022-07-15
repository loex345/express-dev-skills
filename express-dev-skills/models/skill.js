const skills = [
    {id: 1, type: 'Technical', skillName: 'Html', Confidence: 4},
    {id: 2, type: 'Technical', skillName: 'JavaScript', Confidence: 3},
    {id: 3, type: 'Technical', skillName: 'CSS', Confidence: 4},
    {id: 4, type: 'Technical', skillName: 'EJS', Confidence: 2},
    {id: 5, type: 'Technical', skillName: 'Node', Confidence: 3},
    {id: 6, type: 'Technical', skillName: 'Express', Confidence: 4},
    {id: 7, type: 'Soft Skill', skillName: 'Project Management', Confidence: 4},
    {id: 8, type: 'Soft Skill', skillName: 'Presentation', Confidence: 4},
    {id: 9, type: 'Soft Skill', skillName: 'Networking', Confidence: 4},
    
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    update,
    delete: deleteSkill 
  };
  
  function getAll() {
    return skills;
  }
   
  function getOne (id) {
     id = parseInt(id);
     return skills.find((skill) => skill.id === id); 
  }
   
   function create (skill) {
    skill.id = Date.now() % 100000
    skills.push(skill);
    return skill.id;
   }

   function deleteSkill(id){
     id = parseInt(id);
     const skillId = skills.findIndex((s) => s.id === id);
     skills.splice(skillId, 1);
   }

   function update(id, updatedSkill){
    id = parseInt (id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
   }

 