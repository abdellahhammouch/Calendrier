let jour1 = document.querySelector("#jour1");
let jour2 = document.querySelector("#jour2");
let jour3 = document.querySelector("#jour3");
let jour4 = document.querySelector("#jour4");
let jour5 = document.querySelector("#jour5");
let j1 = false,j2 = false,j3 = false,j4 = false,j5 = false;
let formContainer = document.querySelector(".formContainer");
let containerJour = document.querySelector(".calendrierG");

let données = {
  id: document.querySelector("#reservationId").value,
  nom: document.querySelector("#clientName").value,
  date: document.querySelector("#tempsReservation").value,
  nbrP: document.querySelector("#nombreDePersonnes").value,
  typeR: document.querySelector("#reservationType").value,
};
let fermer = document.querySelector(".fermer");
let submit = document.querySelector("#reserverButton");
let form;

jour1.addEventListener("click", () => {
  formContainer.style.display = "flex";
  form = true;
  j1=true;
});

jour2.addEventListener("click", () => {
  formContainer.style.display = "flex";
  form = true;
  j2=true;
});

jour3.addEventListener("click", () => {
  formContainer.style.display = "flex";
  form = true;
  j3=true;
});

jour4.addEventListener("click", () => {
  formContainer.style.display = "flex";
  form = true;
  j4=true;
});

jour5.addEventListener("click", () => {
  formContainer.style.display = "flex";
  form = true;
  j5=true;
});


fermer.addEventListener("click", () => {
  formContainer.style.display = "none";
  form = false;
});

if (form === true && j1 === true) {
  submit.addEventListener("submit", () => {

    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);
    
  });
}
if (form === true && j2 === true) {
  submit.addEventListener("submit", () => {

    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);
    
  });
}
if (form === true && j3 === true) {
  submit.addEventListener("submit", () => {

    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);
    
  });
}
if (form === true && j4 === true) {
  submit.addEventListener("submit", () => {

    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);
    
  });
}
if (form === true && j5 === true) {
  submit.addEventListener("submit", () => {

    let ticket = document.createElement("div");

    let infoTicket = document.createElement("p");
    infoTicket.textContent = `${données.nom} ${données.date} ${données.nbrP} ${données.typeR}`;
    ticket.appendChild(infoTicket);
    
  });
}
