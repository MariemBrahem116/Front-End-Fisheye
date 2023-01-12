const main = document.getElementById("main");
const lightBox = document.querySelector(".lightbox");
import { displayContent, displayLightbox} from "../factories/lightbox.js";
 export default function photographerMediaFactory(media) {
    const main = document.querySelector("#main");
    const photographers = document.querySelector(".photographersId");
    const imageTitle = document.createElement('h4'); 
    const imagePhotographer = document.createElement("img");
    const cardsMediaImg = document.createElement("a");
    const nbLikes = document.createElement("div");
    const heartLink = document.createElement("button");
    const compteur = document.createElement("p");
    const photographerCards = document.createElement("div");
    const cardsTitle = document.createElement("div");
    const titleHeart = document.createElement("i");
    titleHeart.classList.add("fa-solid");
    titleHeart.classList.add("fa-heart");
    heartLink.classList.add("heart_Link");
    cardsMediaImg.classList.add("cards-media-img");
    compteur.innerHTML = media.likes;
    imageTitle.innerHTML = media.title;
    photographerCards.classList.add("photographer-cards");
    nbLikes.classList.add("nb_likes");
    compteur.classList.add("compteur");
    cardsTitle.classList.add("cards-title");
    heartLink.appendChild(titleHeart);
    nbLikes.append(compteur,heartLink);
    cardsTitle.appendChild(imageTitle);
    cardsTitle.appendChild(nbLikes);
    cardsMediaImg.appendChild(imagePhotographer);
    photographerCards.appendChild(cardsMediaImg);
    photographerCards.appendChild(cardsTitle);
    photographers.appendChild(photographerCards);
    main.appendChild(photographers);
    nbLikes.addEventListener("click",function(){
        media.likes++;
        compteur.innerText = media.likes;
        
    })
    const isVideo = url => (/\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i).test(media.image);
    const isImage = url => (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(media.image);
    if(isVideo){
        imagePhotographer.src = `./assets/Sample Photos/medias/${media.image}`;
    }else if(isVideo){
        imagePhotographer.src = `./assets/Sample Photos/medias/${media.video}" type="video/mp4"`;
    }
    cardsMediaImg.addEventListener("click",function(){
        main.style.display = "none";
        lightBox.style.display = "block";
        displayLightbox(media);
        displayContent(media);
    })
  }
  