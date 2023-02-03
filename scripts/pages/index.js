import photographerFactory from "../factories/photographer.js";
const linkData = "./../data/photographers.json";
//récupèrer les données provenant du fichier JSON
fetch(linkData)
  .then((resp) => resp.json())
  .then((data) => displayPhotographers(data.photographers));
//afficher les des photographers ainsi leur caractéristiques  
async function displayPhotographers(photographers) {
  const main = document.getElementById("main");
  const photgraphersection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDom = photographerModel.getUserCardDOM();
    photgraphersection.appendChild(userCardDom);
    main.appendChild(photgraphersection);
  });
}
