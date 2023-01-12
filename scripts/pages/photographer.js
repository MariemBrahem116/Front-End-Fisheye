//Mettre le code JavaScript lié à la page photographer.html
import photographerMediaFactory from "../factories/photographerMedia.js";
import displayFilterMenu from "../factories/dropDown.js";
import { displayLightbox } from "../factories/lightbox.js";
let paramPhotographerId = parseInt((new URL(document.location)).searchParams.get('id'));
const photographerName = document.getElementById("photographerName");
const photographerCityCountry = document.getElementById("photographerCityCountry");
const photographerTagline = document.getElementById("photographerTagline");
const photographerPortrait = document.getElementById("photographerPortrait");
const linkData = "./../data/photographers.json";
fetch(linkData)

    .then((response) => response.json())
    .then((data) => {
        displayPhotographerMedia(data.media);
        displayPhotographerInfo(getPhotographerById(paramPhotographerId ,data.photographers))
        displayFilterMenu(data.media);
        displayInfo(getPhotographerById(paramPhotographerId ,data.photographers),getMediaPhotographer(paramPhotographerId,data.media));
        console.log(getMediaPhotographer(paramPhotographerId,data.media));
        console.log(getMediaPhotographer(paramPhotographerId,data.media).length)
        displayLightbox(data.media);
    });
/**
 * 
 * @param {Number} id 
 * @param {Array} listPhotographer 
 */
function getPhotographerById(id, listPhotographer) {
    var photographerFound = null;
    listPhotographer.forEach(photographer => {
        if(photographer.id === id){
            photographerFound = photographer;
        }
    });
    return photographerFound;
}
function getMediaPhotographer(id, medias) {
    var mediaFound = [];
    medias.forEach(media => {
        if(media.photographerId === id){
            mediaFound.push(media);
        }
    });
    return mediaFound;
}
function displayPhotographerInfo(photographer) {
    photographerName.innerHTML = photographer.name;
    photographerCityCountry.innerHTML = photographer.city + ", " + photographer.country;
    photographerTagline.innerHTML = photographer.tagline;
    photographerPortrait.setAttribute("src","assets/Sample Photos/Photographers_ID_Photos/" + photographer.portrait)
}
export default function displayPhotographerMedia(medias) {
    medias.forEach(media => {
        // teste si le média actuel a pour une photographie identique à paramphotographerid
        if (media.photographerId === paramPhotographerId) {

            // appel du factory pour afficher le media respectant la condition dans le DOM
            photographerMediaFactory(media);
        }
    })
}
function displayInfo(currentPhotographer , medias) {
    const totalLikesContainer = document.createElement("div");
    const priceContainer = document.createElement("div");
    const price = document.createElement("p");
    const totalLikesNb = document.createElement("div");
    const heart = document.createElement("i");
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.classList.add(`heart`);
    heart.classList.add(`heart-global`);
    priceContainer.classList.add("price-container");
    price.classList.add("price");
    totalLikesContainer.classList.add("total-likes-container");
    totalLikesNb.classList.add("total-likes");
    totalLikesNb.textContent = `${getLikes(medias)}`;
    price.textContent = `${currentPhotographer.price}€/ jour`;
    main.append(totalLikesContainer);
    totalLikesNb.append(heart);
    priceContainer.append(price);
    totalLikesContainer.append(totalLikesNb, priceContainer);
    
  }
  function getLikes(medias){
    let sum = 0;
    medias.forEach((media) => {
      sum += media.likes;
    });
    
    return sum;
  } 
    

  

