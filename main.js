const jours = document.querySelectorAll(".jour");
const formContainer = document.querySelector(".formContiner");
const formulaire = document.querySelector("#formulaire");
const fermer = document.querySelector(".fermer");

jours.forEach((jour, indice) => {
  if (indice < 5) {
    jour.addEventListener("click",() => {
      formContainer.computedStyleMap.display = "flex";
    });
  }
});

fermer.addEventListener("click", () => {
  formContainer.style.display = "none";
})