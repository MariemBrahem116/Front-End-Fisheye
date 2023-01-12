import photographerFactory from "../factories/photographer.js"; 
const linkData = "./../data/photographers.json"
        fetch(linkData)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              console.log("Une erreur est survenue ! ");
            }
          })
          .then((data) => displayPhotographers(data.photographers))
       
      
      function displayPhotographers(photographers) {
        
        photographers.forEach ((photographer) => 
        {
            photographerFactory(photographer)
        });
      }
   