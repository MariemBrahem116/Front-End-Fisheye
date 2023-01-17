import getMediaPhotographer from "../pages/photographer.js";
const lightboxModal = document.querySelector(".lightbox");
const slideContainer = document.querySelector(".container-slides");
const closeBtn = document.querySelector(".close");
const next = document.querySelector(".right");
const previous = document.querySelector(".left");
const titleMedia = document.querySelector(".titre-media-lightbox");
const mediaImg = document.createElement("img");
const videoImg = document.createElement("video");

function nextSlide(e) {

  displayContent(media, index + 1);
}

function previousSlide(e) {
  e.preventDefault;
  if (media.indexOf(media) <= 0) {
    media = getMediaPhotographer[getMediaPhotographer.length - 1];
    displayContent(media);
  } else {
    media =
      media[media.indexOf(media) - 1];
    displayContent(media);
  }
}

function closelightbox() {
  const lightboxModal = document.querySelector(".lightbox");
  const main = document.getElementById("main");
  lightboxModal.style.display = "none";
  main.style.display = "block";
}

function displayContent(medias, indexI) {
  appendlightBoxContent(medias[indexI]); 
  next.addEventListener("click", ()=>{
    if(medias.length < indexI + 1){
      indexI = 0;
    }
    appendlightBoxContent(medias[indexI++]);
  });
  previous.addEventListener("click", ()=>{
    if( indexI - 1 < 0){
      indexI = medias.length - 1 ;
    }
    appendlightBoxContent(medias[indexI--]);
  });
  closeBtn.addEventListener("click", closelightbox);
  lightboxModal.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closelightbox(e, s);
    }
    if (e.code === "ArrowRight") {
      nextSlide(e);
    }
    if (e.code === "ArrowLeft") {
      previousSlide(e);
    }
  });

}
function appendlightBoxContent(media){
  const isVideo = (/\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i).test(media.video);
  const isImage = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(media.image);
  if (isImage) {
    mediaImg.src = `./assets/Sample Photos/medias/${media.image}`;
    titleMedia.textContent = `${media.title}`;
    slideContainer.appendChild(mediaImg);
  }
  else if (isVideo) {
    const source = document.createElement("source");
    source.setAttribute("src", `./assets/Sample Photos/medias/${media.video}`)
    videoImg.append(source);
    videoImg.autoplay = true;
    videoImg.loop = true;
    videoImg.controls = true;
    slideContainer.appendChild(videoImg);
  }
}
export { displayContent };

