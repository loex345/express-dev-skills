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
    show,
    create
  };
  
  function getAll() {
    return skills;
  }
   
  function getOne (id) {
     id = parseInt(id);
     return skills.find((skill) => skill.id === id); 
  }
  function show (req, res) {
    const skill = Skill.getAll(req.params.id);
    res.render('skills/show', { skillName });
   }
   function create (Skill) {
    Skill.id = Date.now() % 100000
    skills.push(Skill);
   }
 