// Load projects from LocalStorage

let projects =
JSON.parse(localStorage.getItem("projects")) || [];

const projectsContainer =
document.getElementById("projectsContainer");

function loadProjects(){

if(!projectsContainer) return;

projectsContainer.innerHTML = "";

if(projects.length === 0){

projectsContainer.innerHTML = `
<div class="project-card">
<h3>No Projects Added</h3>
<p>Add projects from Admin Dashboard.</p>
</div>
`;

return;
}

projects.forEach(project => {

projectsContainer.innerHTML += `
<div class="project-card">
<h3>${project.title}</h3>
<p>${project.description}</p>
</div>
`;

});

}

loadProjects();
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

const loginBox =
document.getElementById("loginBox");

const dashboard =
document.getElementById("dashboard");

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(
username === ADMIN_USERNAME &&
password === ADMIN_PASSWORD
){

loginBox.style.display = "none";
dashboard.style.display = "block";

loadProjects();

}
else{

alert("Invalid Username or Password");

}

}

function addProject(){

let title =
document.getElementById("projectTitle").value;

let description =
document.getElementById("projectDescription").value;

if(title === "" || description === ""){

alert("Please fill all fields");
return;

}

let projects =
JSON.parse(localStorage.getItem("projects")) || [];

projects.push({
title:title,
description:description
});

localStorage.setItem(
"projects",
JSON.stringify(projects)
);

document.getElementById("projectTitle").value = "";
document.getElementById("projectDescription").value = "";

loadProjects();

}

function loadProjects(){

let projects =
JSON.parse(localStorage.getItem("projects")) || [];

const projectList =
document.getElementById("projectList");

projectList.innerHTML = "";

projects.forEach((project,index)=>{

projectList.innerHTML += `

<div class="project-card">

<h3>${project.title}</h3>

<p>${project.description}</p>

<button
class="delete-btn"
onclick="deleteProject(${index})">

Delete

</button>

</div>

`;

});

}

function deleteProject(index){

let projects =
JSON.parse(localStorage.getItem("projects")) || [];

projects.splice(index,1);

localStorage.setItem(
"projects",
JSON.stringify(projects)
);

loadProjects();

}