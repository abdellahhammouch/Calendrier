const jours = document.querySelectorAll(".jour");
const formContainer = document.querySelector(".formContainer");
const formulaire = document.querySelector("#formulaire");
const fermer = document.querySelector(".fermer");

let jourActif = null;

jours.forEach((jour, indice) => {
  jour.addEventListener("dblclick", () => {
    formContainer.style.display = "flex";
    jourActif = jour;
  });
});

fermer.addEventListener("click", () => {
  formContainer.style.display = "none";
  jourActif = null;
});

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const infoUser = {
    id: Date.now(),
    clientName: document.querySelector("#clientName").value.trim(),
    tempsR: document.querySelector("#tempsReservation").value,
    nbrP: document.querySelector("#nombreDePersonnes").value,
    typeR: document.querySelector("#reservationType").value,
  };

  const ticket = document.createElement("div");
  ticket.style.display = "flex";
  ticket.classList.add("reservation", infoUser.typeR.toLowerCase());
  ticket.textContent = `${infoUser.clientName} - ${infoUser.tempsR} - ${infoUser.nbrP} pers. - ${infoUser.typeR}`;
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "✖";
  boutonSupprimer.classList.add("btn-supprimer");
  ticket.appendChild(boutonSupprimer);
  boutonSupprimer.style.justifyContent = "flex-end";
  boutonSupprimer.style.cursor = "pointer";
  boutonSupprimer.style.border = "none";
  boutonSupprimer.style.background = "transparent";
  boutonSupprimer.style.fontWeight = "bold";

  jourActif.appendChild(ticket);
  ticket.appendChild(boutonSupprimer);
  formContainer.style.display = "none";

  let color;
  switch (infoUser.typeR) {
    case "vip":
      color = "#E62727";
      break;
    case "standard":
      color = "#1E93AB";
      break;
    case "anniversaire":
      color = "#07c507ff";
      break;
    case "groupe":
      color = "#DCDCDC";
      break;

    default:
      break;
  }

  ticket.style.backgroundColor = color;
  ticket.style.borderRadius = "10px";
  ticket.style.padding = "1%";
  ticket.style.marginBottom = "2%";

  formulaire.reset();

  boutonSupprimer.addEventListener("click", () => {
    const confirmation = confirm("Voulez-vous vraiment supprimer cette réservation ?"
    );
    if (confirmation) {
      ticket.remove();
    }
  });
});
