//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams; 
const linkData = "./../data/photographers.json"
        fetch(linkData)
          .then((response) => response.json())
            
          .then((data) => displayPhotographerID(data.photographers,params))
         
          function displayPhotographerID(photographers,params) {
            
                if(photographers.id===params.get('id')){
        
            photographerFactoryID(photographers);
            
            }     
         }
       

