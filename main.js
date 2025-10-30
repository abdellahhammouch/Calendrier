let jours = document.querySelectorAll(".case");
let formContainer = document.querySelector(".formContainer");
let nom = document.querySelector("#clientName");
let fermer = document.querySelector(".fermer");
let form ;


for (let i = 0; i < jours.length; i++) {
    jours[i].textContent = i+1;
}


