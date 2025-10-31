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

  let color;
  switch (infoUser.typeR) {
    case 'VIP':
      color = "#ff0000ff";
      break;
    case 'Standard':
      color = "#5100ffff";
      break;
    case 'Anniversaire':
      color = "#00ff00ff";
      break;
    case 'Groupe':
      color = "#ffff00ff";
      break;
  
    default:
      break;
  }
  const ticket = document.createElement("div");
  ticket.classList.add("reservation", infoUser.typeR.toLowerCase());
  ticket.textContent = `${infoUser.clientName} - ${infoUser.tempsR} - ${infoUser.nbrP} pers. - ${infoUser.typeR}`;

  jourActif.appendChild(ticket);
  formContainer.style.display = "none";


})
