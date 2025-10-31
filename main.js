const jours = document.querySelectorAll(".jour");
const formContainer = document.querySelector(".formContainer");
const formulaire = document.querySelector("#formulaire");
const fermer = document.querySelector(".fermer");

let jourActif = null;

jours.forEach((jour, indice) => {
  if (indice < 5) {
    jour.addEventListener("click",() => {
      formContainer.style.display = "flex";
      jourActif = jour;
    });
  }
});

fermer.addEventListener("click", ()=> {
  formContainer.style.display = "none";
  jourActif = null;
})

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const infoUser = {
    id : Date.now(),
    clientName : document.querySelector("#clientName").value.trim(),
    tempsR : document.querySelector("#tempsReservation").value,
    nbrP : document.querySelector("#nombreDePersonnes").value,
    typeR : document.querySelector("#reservationType").value
  }
})
