// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name,id,email)
    this.github = github;
  }
 getGithub(){
     return this.github;
  }

}
 
// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("html);
//   })
//   .then(function() {
//     console.log("Great Job, Please visit Git hub link to check out new READ ME file!");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
