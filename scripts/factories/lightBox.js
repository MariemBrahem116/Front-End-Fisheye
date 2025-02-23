const lightboxModal = document.querySelector(".lightbox");
const slideContainer = document.querySelector(".container-slides");
const closeBtn = document.querySelector(".close");
const next = document.querySelector(".right");
const previous = document.querySelector(".left");
const titleMedia = document.querySelector(".titre-media-lightbox");
const mediaImg = document.createElement("img");
const videoImg = document.createElement("video");

//Fermer les media via croix
function closelightbox() {
  const lightboxModal = document.querySelector(".lightbox");
  const main = document.getElementById("main");
  lightboxModal.style.display = "none";
  main.style.display = "block";
}
//charger le media suivant
function displayContent(medias, indexI) {
  appendlightBoxContent(medias[indexI]);
  // Charger le media suivant  
  next.addEventListener("click",()=>{
    next.focus();
    if(medias.length <= indexI + 1 ){
      indexI = 0;
    }
    else{
      indexI += 1; 
    }
    appendlightBoxContent(medias[indexI]);
  });
  next.addEventListener("keydown",(e)=>{
    if(e.code==="Enter"){
      next.focus();
    if(medias.length <= indexI + 1 ){
      indexI = 0;
    }
    else{
      indexI += 1; 
    }
    appendlightBoxContent(medias[indexI]);
    }
  });
  //Charger le media précedent
  previous.addEventListener("click", ()=>{
    previous.focus();
    if( indexI - 1 < 0){
      indexI = medias.length - 1 ;
    }
    else{
      indexI -= 1;
    }
    appendlightBoxContent(medias[indexI]);
  });
  previous.addEventListener("keydown", (e)=>{
    if(e.code==="Enter"){
      previous.focus();
    if( indexI - 1 < 0){
      indexI = medias.length - 1 ;
    }
    else{
      indexI -= 1;
    }
    appendlightBoxContent(medias[indexI]);
    }
  });
  previous.focus();
  closeBtn.addEventListener("click", closelightbox);
  closeBtn.addEventListener("keydown", (e) =>{
    if(e.code==="Enter"){
      closelightbox();
    }
  });
  lightboxModal.addEventListener("keydown", (e) => {
    //Fermer la light box via ESC
    if (e.code === "Escape") {
      closelightbox();
    }
    //Charger le media suivant via le clavier
    if (e.code === "ArrowRight") {
      next.focus();
    if(medias.length <= indexI + 1 ){
      indexI = 0;
    }
    else{
      indexI += 1; 
    }
    appendlightBoxContent(medias[indexI]);
    }
    
    //Charger le media précedent via le clavier
    if (e.code === "ArrowLeft") {
      previous.focus();
    if( indexI - 1 < 0){
      indexI = medias.length - 1 ;
    }
    else{
      indexI -= 1;
    }
    appendlightBoxContent(medias[indexI]);
    }
  });
}

//Récupérer les medias et les tester
function appendlightBoxContent(media){
  const isVideo = (/\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i).test(media.video);
  const isImage = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(media.image);
  slideContainer.innerHTML = "";
  if (isImage) {
    mediaImg.src = `./assets/Sample Photos/medias/${media.image}`;
    mediaImg.setAttribute("alt",media.title);
    titleMedia.textContent = `${media.title}`;
    slideContainer.appendChild(mediaImg);
  }
  else if (isVideo) {
    const source = document.createElement("source");
    source.setAttribute("src", `./assets/Sample Photos/medias/${media.video}`);
    source.setAttribute("alt",media.title);
    videoImg.style.zIndex = 10;
    videoImg.append(source);
    videoImg.setAttribute("controls", "true");
    slideContainer.appendChild(videoImg);
  }
}
export { displayContent };

