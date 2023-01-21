import photographerFactory from "../factories/photographer.js";
const linkData = "./../data/photographers.json";
//récupèrer les données provenant du fichier JSON
fetch(linkData)
  .then((resp) => resp.json())
  .then((data) => displayPhotographers(data.photographers));
//afficher les des photographers ainsi leur caractéristiques  
function displayPhotographers(photographers) {
  photographers.forEach((photographer) =>  photographerFactory(photographer));
}
