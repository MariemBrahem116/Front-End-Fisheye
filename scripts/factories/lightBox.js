    import getMediaPhotographer from "../pages/photographer.js";
    const lightboxModal = document.querySelector(".lightbox");
    const slideContainer = document.querySelector(".container-slides");
    const closeBtn = document.querySelector(".close");
    const next = document.querySelector(".right");
    const previous = document.querySelector(".left");
    const titleMedia = document.querySelector(".titre-media-lightbox");
    const mediaImg = document.createElement("img");
    const mediaVid = document.createElement("video");
    function displayLightbox(media) { 
    next.addEventListener("click", nextSlide);
    previous.addEventListener("click", previousSlide);
    closeBtn.addEventListener("click", closelightbox);
    lightboxModal.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closelightbox(e, media);
      }
      if (e.code === "ArrowRight") {
        nextSlide(e);
      }
      if (e.code === "ArrowLeft") {
        previousSlide(e);
      }
    });
  
    function nextSlide(e) {
      e.preventDefault;
      if (getMediaPhotographer.indexOf(media) + 1 >= getMediaPhotographer.length) {
        media = getMediaPhotographer[0];
      } else {
        media =
        getMediaPhotographer[getMediaPhotographer.indexOf(media) + 1];
      }
      displayContent(media);
    }
  
    function previousSlide(e) {
      e.preventDefault;
      if (getMediaPhotographer.indexOf(media) <= +0) {
        media = getMediaPhotographer[getMediaPhotographer.length - 1];
        displayContent(media);
      } else {
        media =
        getMediaPhotographer[getMediaPhotographer.indexOf(media) - 1];
        displayContent(media);
      }
    }
  
    function closelightbox() {
      const lightboxModal = document.querySelector(".lightbox");
      const main = document.getElementById("main");
      lightboxModal.style.display = "none";
      main.style.display = "block";
    }
  
}   


function displayContent(media) {
  const isVideo = url => (/\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i).test(media.image);
  const isImage = url => (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(media.video);
  if (isImage) {

    mediaVid.replaceWith(mediaImg);
    mediaImg.src = `./assets/Sample Photos/medias/${media.image}`;
    titleMedia.textContent = `${media.title}`;
    slideContainer.appendChild(mediaImg);
  } else if (isVideo) {
    mediaVid.src = `./assets/Sample Photos/medias/${media.video}" type="video/mp4"`;
    titleMedia.textContent = `${media.title}`;
    mediaImg.replaceWith(mediaVid);
    mediaVid.setAttribute("alt", media.alt);
    mediaVid.autoplay = true;
    mediaVid.loop = true;
    slideContainer.appendChild(mediaVid);
  }
}
  export { displayLightbox, displayContent };
  
  