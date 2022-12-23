
function photographerFactory(photographer) {
    const linkToPage = "photographer.html?id=" + photographer.id;
    const linkToPhoto =
        "./assets/photographers/" + photographer.portrait;
    const cardPhotographer = document.querySelector(".photographer_section");
    const cardPhtographers = document.createElement("div")
    const cardLink = document.createElement("a");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const cardBody = document.createElement("div");
    const cardLocation = document.createElement("h3");
    const cardTagline = document.createElement("p");
    const cardPrice = document.createElement("p");
    cardPhtographers.classList.add("photographer_cards");
    cardImg.classList.add("cards-img");
    cardTitle.classList.add("cards-title");
    cardLocation.classList.add("cards-location");
    cardLink.classList.add("cards-photographer-link");
    cardTagline.classList.add("cards-tagline");
    cardPrice.classList.add("cards-price");
    cardBody.classList.add("cards-body");
    cardLink.setAttribute("role", "link");
    cardLink.href = linkToPage;
    cardImg.setAttribute("src",linkToPhoto);
  //  cardImg.alt = "";
    cardTitle.textContent = photographer.name;
    cardLocation.textContent = photographer.city + ", " + photographer.country;
    cardTagline.textContent = photographer.tagline;
    cardPrice.textContent = photographer.price + "€/jour";
    
    cardBody.appendChild(cardLocation);
    cardBody.appendChild(cardTagline);
    cardBody.appendChild(cardPrice);
    cardLink.appendChild(cardImg);
    cardLink.appendChild(cardTitle);
    cardPhtographers.appendChild(cardLink);
    cardPhtographers.appendChild(cardBody);
    cardPhotographer.appendChild(cardPhtographers)
    main.appendChild(cardPhotographer);
}
function photographerFactoryID(currentPhotographer) {
    const main = document.querySelector("#main");
        const linkToPhoto =
    "./assets/photographers/" + currentPhotographer.portrait;
    const photographHeader = document.querySelector(".photograph-header");
    const btnModal = document.querySelector(".contact_button");
    //  création des elements html
    const photographerBody = document.createElement("div");
    const photographerTitle = document.createElement("h1");
    const photographerLocation = document.createElement("p");
    const photographerTagline = document.createElement("p");
    const photographerImg = document.createElement("img");
    // ajouts des classes et attributs html
  
    photographerBody.classList.add("photographer-body");
    photographerImg.classList.add("photographer-img");
    photographerTitle.classList.add("photographer-body-title");
    photographerLocation.classList.add("photographer-body-location");
    photographerTagline.classList.add("photographer-body-tagline");
    photographerImg.src = linkToPhoto;
    photographerImg.setAttribute("alt", `${currentPhotographer.name}`);
  
    photographerTitle.textContent = currentPhotographer.name;
    photographerLocation.textContent =
      currentPhotographer.city + " ," + currentPhotographer.country;
      photographerTagline.textContent = currentPhotographer.tagline;  
  
    // ajout des elements dans le DOM
    photographerBody.appendChild(photographerTitle);
    photographerBody.appendChild(photographerLocation);
    photographerBody.appendChild(photographerTagline);
    photographHeader.appendChild(photographerBody);
    photographHeader.appendChild(btnModal);
    main.appendChild(photographHeader);
  }