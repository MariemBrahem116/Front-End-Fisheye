const photgraphHeader = document.querySelector(".photograph-header");
const logoHeader = document.querySelector(".logo-Header");
const modal = document.getElementById("contact_modal");
const confirmMessage = document.querySelector(".confirm-message");
const containerInput = document.querySelectorAll(".formData");
function displayModal() {
	modal.style.display = "block";
    confirmMessage.style.display = "none";
}

function closeModal() { 
    modal.style.display = "none";
}
//Accéder à toutes les entrées et paramétrer la validation
//Indiquer si l'expression régulière trouve une correspondance dans la chaîne d'entrée
const inputs = {
    firstname: {
        element: document.querySelector("#prenom"),
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
    }, 
    lastname: {
        element: document.querySelector("#nom"),
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/,
    },
    email: {
        element: document.querySelector("#email"),
        regex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
  
    message: {
        element: document.querySelector("#msg"), 
    }
  };
  // pour atteindre tous les éléments qui affichent des messages d'erreur pour la validation du formulaire
   class validate {  
    constructor(inputs, containerInput) {
        this.inputs = inputs;
        this.containerInput = containerInput;
    }
    valid = true;
    // Les méthodes de validation
        //vérifier si le nom et le prénom ne sont pas vide et ils comportent  au minimum 2 lettres 
        nameValidation = (element, regex) => element.value == "" || element.value.length < 2 || !regex.test(element.value) ? false : true;
  
        // vérifier si le mail est valide
        emailValidation = (element, regex) => !regex.test(element.value) ? false : true;
  
  
        // vérifier si la case message est vide
        messageValidation = (element) => element.value == "";
  
    //supprimer les messages d'erreur
    removeErrorMessage = () => {
        this.valid = true;
        Array.from(this.containerInput).map((field) => {
            field.removeAttribute("data-error-visible");
        });
    };
  
    launchValidation = () => {
        this.removeErrorMessage();
        for (const input in this.inputs) {
            switch (input) {
                case "firstname":
                    if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;
  
                case "lastname":
                    if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;
  
                case "email":
                    if (!this.emailValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;
  
                case "message":
                    if (!this.messageValidation(this.inputs[input].element)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;
  
                default : 
                    break;
            }
        }
        return this.valid;
    }
  }
  // Valider le formulaire en cas de remplissage de donnée sans erreur
  const validator = new validate(inputs, containerInput);
  modal.onsubmit = (e) => {
      e.preventDefault();
      if (validator.launchValidation()) {
          modal.reset();
          modal.style.display ="none";
          confirmMessage.style.display ="flex";
      }
  }
  
  
  