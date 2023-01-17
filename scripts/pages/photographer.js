//Mettre le code JavaScript lié à la page photographer.html
import { photographerMediaFactory, getLikes } from "../factories/photographerMedia.js";
import displayFilterMenu from "../factories/dropDown.js";
let paramPhotographerId = parseInt((new URL(document.location)).searchParams.get('id'));
const photographerName = document.getElementById("photographerName");
const photographerCityCountry = document.getElementById("photographerCityCountry");
const photographerTagline = document.getElementById("photographerTagline");
const photographerPortrait = document.getElementById("photographerPortrait");
const sort = document.querySelector(".filter-options-container");
const linkData = "./../data/photographers.json";
fetch(linkData)

    .then((response) => response.json())
    .then((data) => {
        displayPhotographerMedia(data.media, "title");
        sort.children.item(0).addEventListener("click",()=> displayPhotographerMedia(data.media,"popularite"));
        sort.children.item(1).addEventListener("click",()=> displayPhotographerMedia(data.media,"date"));
        sort.children.item(2).addEventListener("click",()=> displayPhotographerMedia(data.media,"title"));
        displayPhotographerInfo(getPhotographerById(paramPhotographerId, data.photographers))
        displayFilterMenu(displayPhotographerMedia);
        console.log(data.media.indexOf(data.media[5]));
        console.log(getMediaPhotographer(paramPhotographerId, data.media).length)
        displayInfo(getPhotographerById(paramPhotographerId, data.photographers), getMediaPhotographer(paramPhotographerId, data.media));
    });
/**
 * 
 * @param {Number} id 
 * @param {Array} listPhotographer 
 */
function getPhotographerById(id, listPhotographer) {
    var photographerFound = null;
    listPhotographer.forEach(photographer => {
        if (photographer.id === id) {
            photographerFound = photographer;
        }
    });
    return photographerFound;
}
function getMediaPhotographer(id, medias) {
    var mediaFound = [];
    medias.forEach(media => {
        if (media.photographerId === id) {
            mediaFound.push(media);
        }
    });
    return mediaFound;
}
function displayPhotographerInfo(photographer) {
    photographerName.innerHTML = photographer.name;
    photographerCityCountry.innerHTML = photographer.city + ", " + photographer.country;
    photographerTagline.innerHTML = photographer.tagline;
    photographerPortrait.setAttribute("src", "assets/Sample Photos/Photographers_ID_Photos/" + photographer.portrait)
}
export default function displayPhotographerMedia(medias, filterType) {
    var filterData = [];
    medias.forEach(media => {
        if (media.photographerId == paramPhotographerId) {
            filterData.push(media);

        }
    })
    filterData = getMediaList(filterData, filterType);
    filterData.forEach((media, index) => {
        // teste si le média actuel a pour une photographie identique à paramphotographerid
        // appel du factory pour afficher le media respectant la condition dans le DOM
        photographerMediaFactory(media, filterData, index);

    })
}
function displayInfo(currentPhotographer, medias) {
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
    totalLikesContainer.setAttribute("id", "total_likes_container")
    totalLikesNb.setAttribute("id", "total_Likes_Nb");
    totalLikesNb.textContent = getLikes(medias);
    price.textContent = `${currentPhotographer.price}€/ jour`;
    main.append(totalLikesContainer);
    totalLikesNb.appendChild(heart);
    priceContainer.appendChild(price);
    totalLikesContainer.append(totalLikesNb, priceContainer);
}


function getMediaList(localMediaList, critaire) {
    var elementA;
    var elementB;
    localMediaList.sort(function (a, b) {
        switch (critaire) {
            case "date":

                break;
            case "popularite":
                elementA = a.likes;
                elementB = b.likes;
                break;
            case "title":
                elementA = a.title.toUpperCase();
                elementB = b.title.toUpperCase();
                break;
        }
        if (elementA < elementB) {
            return -1;
        }
        if (elementA > elementB) {
            return 1;
        }
        return 0;
    });
    return localMediaList;
}


