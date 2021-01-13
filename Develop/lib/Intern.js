// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name."
    },
    {
      type: "list",
      name: "role",
      message: "What is your Role? ",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "id",
      message: "Please enetr your ID."
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email Address."
    },
    {
      type: "input",
      name: "school",
      message: "Enter your School Name."
    },
  
  
  
  
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${answer.name}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${answer.role}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answer.id }</li>
        <li class="list-group-item">Email: <a href="mailto:${answer.email}">${answer.email}</a></li>
        <li class="list-group-item">School:${answer.school}</li>
    </ul>
</div>
</div>

 </body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("read.md", html);
  })
  .then(function() {
    console.log("Great Job, Please visit Git hub link to check out new READ ME file!");
  })
  .catch(function(err) {
    console.log(err);
  });
