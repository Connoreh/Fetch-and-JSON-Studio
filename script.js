// TODO: add code here
window.addEventListener("load", function () { 
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
response.json().then( function(json) { 
const astronautList = document.getElementById("container");
for(i=0; i <= json.length; i++) {
    astronautList.innerHTML += `
    <div class="astronaut">
    <div class="bio">
    <h3>${json[i].firstName}  ${json[i].lastName}</h3>
    <ul> 
    <li>Skills: ${json[i].skills}</li>
    <li>Hours in Space: ${json[i].hoursInSpace}</li>
    <li>active: ${json[i].active}</li>
    </ul>
    </div>
    <img class="avatar" src="${json[i].picture}">
    </div> 

`
if(json[i].active === true) {
json.active
}


}
});
    
    });
});