
export default function photographerFactory(photographer) {
    const main = document.querySelector("#main");
    const linkToPage = "photographer.html?id=" + photographer.id;
    const linkToPhoto =
        "./assets/Sample Photos/Photographers_ID_Photos/" + photographer.portrait;
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
