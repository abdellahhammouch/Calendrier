let jour = document.querySelectorAll(".jour");
let formContainer = document.querySelector(".formContainer");
let containerJour = document.querySelector(".calendrierG");
id = 0;
let données = {
    id : document.querySelector(".reservationId").value,
    nom: document.querySelector("#clientName").value,
    date: document.querySelector("#tempsReservation").value,
    nbrP: document.querySelector("#nombreDePersonnes").value,
    typeR: document.querySelector("#reservationType").value,
};
let fermer = document.querySelector(".fermer");
let submit = document.querySelector("#reserverButton");
let form;

for (let j = 0; j < 7; j++) {
  jour[j].addEventListener("click", () => {
    formContainer.style.display = "flex";
    form = true;
  });
}

fermer.addEventListener("click", () => {
  formContainer.style.display = "none";
  form = false;
});

if (form === true) {
  submit.addEventListener("submit", () => {
    id ++;
    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);


  });
}
