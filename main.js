let jours = document.querySelectorAll(".jour");
let formContainer = document.querySelector(".formContainer");
let nom = document.querySelector("#clientName");
let fermer = document.querySelector(".fermer");
let form ;




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


if (form === true) {
    
}
