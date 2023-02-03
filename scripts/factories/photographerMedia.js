const lightBox = document.querySelector(".lightbox");
import { displayContent } from "../factories/lightBox.js";
function photographerMediaFactory(media, medias, index) {
  const photographers = document.querySelector(".photographersId");
  const imageTitle = document.createElement('h4');
  const imagePhotographer = document.createElement("img");
  const videoPhotographer = document.createElement("video");
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
  cardsMediaImg.setAttribute("role", "button");
  cardsMediaImg.setAttribute("title", media.title);
  cardsMediaImg.setAttribute("aria-describedby", "ouvrir le slider");
  cardsMediaImg.href = "#";
  cardsMediaImg.setAttribute("tabindex", "0");
  heartLink.setAttribute("tabindex", "0");
  compteur.innerHTML = media.likes;
  imageTitle.innerHTML = media.title;
  photographerCards.classList.add("photographer-cards");
  photographerCards.setAttribute("lang","en-GB");
  nbLikes.classList.add("nb_likes");
  heartLink.setAttribute("aria-label","aimer cette page");
  heartLink.setAttribute("role","button");
  heartLink.setAttribute("tabindex","0");
  compteur.classList.add("compteur");
  compteur.setAttribute("aria-label",`Nombre de likes ${media.likes}`);
  compteur.setAttribute("tabindex","0");
  cardsTitle.classList.add("cards-title");
  heartLink.appendChild(titleHeart);
  nbLikes.append(compteur, heartLink);
  cardsTitle.appendChild(imageTitle);
  cardsTitle.appendChild(nbLikes);
  photographerCards.appendChild(cardsMediaImg);
  photographerCards.appendChild(cardsTitle);
  photographers.appendChild(photographerCards);
  nbLikes.addEventListener("click", function () {
    media.likes++;
    compteur.innerText = media.likes;
    const heart = document.createElement("i");
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.classList.add(`heart`);
    heart.classList.add(`heart-global`);
    const nbTotal = document.getElementById("total_Likes_Nb");
    nbTotal.textContent = parseInt(nbTotal.textContent) + 1;
    nbTotal.appendChild(heart);
  })
  const isVideo = (/\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i).test(media.video);
  const isImage = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(media.image);
  if (isImage) {
    imagePhotographer.src = `./assets/Sample Photos/medias/${media.image}`;
    imagePhotographer.setAttribute("alt", "");
    imagePhotographer.classList.add("cardsImg");
    cardsMediaImg.appendChild(imagePhotographer);
  }
  else if (isVideo) {
    const source = document.createElement("source");
    source.setAttribute("src", `./assets/Sample Photos/medias/${media.video}`);
    source.setAttribute("alt", "");
    videoPhotographer.append(source);
    videoPhotographer.classList.add("cardsImg");
    cardsMediaImg.appendChild(videoPhotographer);
  }
  cardsMediaImg.addEventListener("keydown", function (e) {
    if (e.key === "Enter"){
      lightBox.style.display = "block";
      displayContent(medias, index);
    }
  })
  cardsMediaImg.addEventListener("click", function () {
    lightBox.style.display = "block";
    displayContent(medias, index);
  })
}
function getLikes(medias) {
  let sum = 0;
  medias.forEach((media) => {
    sum += media.likes;
  });
  return sum;
}
export { photographerMediaFactory, getLikes }
