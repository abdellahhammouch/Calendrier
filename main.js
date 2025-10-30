let jours = document.querySelectorAll(".case");
let formContainer = document.querySelector(".formContainer");
let nom = document.querySelector("#clientName");
let fermer = document.querySelector(".fermer");
let form ;


for (let i = 0; i < jours.length; i++) {
    jours[i].textContent = i+1;
}

for (let j = 0; j < 5; j++) {
    jours[j].addEventListener('click', () => {
        formContainer.style.display = "flex";
        form = true;
    })
}

fermer.addEventListener('click', () => {
        formContainer.style.display = "none";
        form = false;
})
