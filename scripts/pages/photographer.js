import { photographerMediaFactory, getLikes } from "../factories/photographerMedia.js";
import displayFilterMenu from "../factories/filterMenu.js";

//Chercher l'id du photographer passé en paramètre
let paramPhotographerId = parseInt((new URL(document.location)).searchParams.get('id'));

//Eléments DOM
const photographerName = document.getElementById("photographerName");
const photographerCityCountry = document.getElementById("photographerCityCountry");
const photographerTagline = document.getElementById("photographerTagline");
const photographerPortrait = document.getElementById("photographerPortrait");
const sort = document.querySelector(".filter-options-container");
const linkData = "./../data/photographers.json";

//récupèrer les données provenant du fichier JSON
fetch(linkData)
    .then((response) => response.json())
    .then((data) => {
        //charger la liste des medias trier par popularté par défaut
        displayPhotographerMedia(data.media, "popularite");
        //Charger la liste des medias trier par popularté en cliquant si dessus
        sort.children.item(0).addEventListener("click", () => displayPhotographerMedia(data.media, "popularite"));
        //Charger la liste des medias trier par date en cliquant si dessus
        sort.children.item(1).addEventListener("click", () => displayPhotographerMedia(data.media, "date"));
        //Charger la liste des medias trier par titre en cliquant si dessus
        sort.children.item(2).addEventListener("click", () => displayPhotographerMedia(data.media, "titre"));
        //Afficher le photographer sélectionné
        displayPhotographerInfo(getPhotographerById(paramPhotographerId, data.photographers));
        //Afficher le nom du photographer sélectionné sur le modal et le message de confirmation
        displayTitleModal(getPhotographerById(paramPhotographerId, data.photographers));
        //afficher les filtres
        displayFilterMenu(displayPhotographerMedia);
        //afficher la liste des medias lié au photographe sélectionné
        displayInfo(getPhotographerById(paramPhotographerId, data.photographers), getMediaPhotographer(paramPhotographerId, data.media));
    });

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
    photographerPortrait.setAttribute("src", "assets/Sample Photos/Photographers_ID_Photos/" + photographer.portrait);
    photographerPortrait.setAttribute("alt", photographer.name);
}

function displayTitleModal(photographer) {
    const modalTitle = document.querySelector(".modalTitle");
    modalTitle.innerHTML = "Contactez-moi <br>" + photographer.name;
}

export default function displayPhotographerMedia(medias, filterType) {
    var filterData = [];
    document.querySelector(".photographersId").innerHTML = "";
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
            case "popularite":
                elementA = b.likes;
                elementB = a.likes;
                break;
            case "date":
                elementA = a.date;
                elementB = b.date;
                break;
            case "titre":
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
    console.log(localMediaList);
}


