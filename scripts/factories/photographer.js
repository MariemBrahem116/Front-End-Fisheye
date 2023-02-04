//afficher les photographes de la page d'accueil
export default function photographerFactory(photographer) {
    const {name,id, city, country, tagline, price,portrait } = photographer
    const linkToPage = `photographer.html?id=${id}`;
    const linkToPhoto = `./assets/Sample Photos/Photographers_ID_Photos/${portrait}`;
    function getUserCardDOM() {
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
        cardLink.href = linkToPage;
        cardImg.setAttribute("src", linkToPhoto);
        cardImg.setAttribute("alt", "");
        cardTitle.textContent = name;
        cardLocation.textContent = city + ", " + country;
        cardTagline.textContent = tagline;
        cardPrice.textContent = price + "€/jour";
        cardBody.appendChild(cardLocation);
        cardBody.appendChild(cardTagline);
        cardBody.appendChild(cardPrice);
        cardLink.appendChild(cardImg);
        cardLink.appendChild(cardTitle);
        cardPhtographers.append(cardLink,cardBody);
        return(cardPhtographers)
    }
    return {linkToPage,linkToPhoto,name,id,city,country,tagline,price,getUserCardDOM}
}
