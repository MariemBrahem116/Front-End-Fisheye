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
        const main = document.querySelector("#main");
        photographers.forEach ((photographer) => 
        {
            photographerFactory(photographer)
        });
      }
   