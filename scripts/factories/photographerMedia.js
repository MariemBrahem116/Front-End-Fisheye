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
  compteur.innerHTML = media.likes;
  imageTitle.innerHTML = media.title;
  photographerCards.classList.add("photographer-cards");
  nbLikes.classList.add("nb_likes");
  compteur.classList.add("compteur");
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
    imagePhotographer.setAttribute("alt", media.title);
    cardsMediaImg.appendChild(imagePhotographer);
  }
  else if (isVideo) {
    const source = document.createElement("source");
    source.setAttribute("src", `./assets/Sample Photos/medias/${media.video}`);
    source.setAttribute("alt", media.title);
    videoPhotographer.append(source);
    cardsMediaImg.appendChild(videoPhotographer);
  }
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
