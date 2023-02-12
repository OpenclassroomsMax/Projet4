function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const spanclose = document.querySelectorAll(".close");

// Elements du DOM
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');

// confirmation modal
const modalSubmit = document.getElementsByClassName('confirmation-submit');
const closeModalConfirmation = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementsByClassName('btn-fermer');


let regExTypeText = new RegExp(
  '^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$' 
);
let regExTypeEmail = new RegExp(                              
  '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
);

// evenement ouverture de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ouverture de la modale
function launchModal() {
  modalbg.style.display = "block";
}


// evenement fermeture de la modale
spanclose.forEach((btnclose) => btnclose.addEventListener("click", closeModal));

//fermeture de la modale
function closeModal(){
  modalbg.style.display ="none";
}

// Verification firstname
function checkfirstname() {
    if (firstName.value.trim() === '' || !firstName.value.match(regExTypeText)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    else{
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = '';
    return true;
    }
}

// Verification lastname
function checklastname() {
    if (lastName.value.trim() === "" || !lastName.value.match(regExTypeText)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    else{
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    lastName.style.border = '';
    return true;
    }
}

// Verification email
function checkemail() {
    if (email.value.trim() ==="" || !email.value.match(regExTypeEmail)) {
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
    }
    else{
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = '';
    return true;
    }
}

// Verification birthdate
function checkbirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = '2px solid #e54858';
        return false;
    }
    else{
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = '';
    return true;
    }
}

// Verification des quantités
function checkquantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    else{
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = '';
    return true;
    }
}

// Verification des puces
function checklocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;

}

// Verification des conditions
function checkcheckbox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    else{
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
    }
}

// Form des champs
function BuildValidation(element, method, event) {
    element.addEventListener(event, method);
}

BuildValidation(firstName, checkfirstname, 'focusout');
BuildValidation(lastName, checklastname, 'focusout');
BuildValidation(email, checkemail, 'focusout');
BuildValidation(birthdate, checkbirthdate, 'focusout');
BuildValidation(quantity, checkquantity, 'focusout');
BuildValidation(allLocations, checklocations, 'change');
BuildValidation(checkbox1, checkcheckbox, 'change');

// Verification des champs afin de valider
function CheckValidation() {
    checkfirstname()
    checklastname()
    checkemail()
    checkbirthdate()
    checkquantity()
    checklocations()
    checkcheckbox()
}

/**
 * 
 * @returns {boolean}
 */


function Validation() {
    if (checkfirstname() === true &&
        checklastname() === true &&
        checkemail() === true &&
        checkbirthdate() === true &&
        checkquantity() === true &&
        checklocations() === true &&
        checkcheckbox() === true) {
        return true;
    }
    checkfirstname()
    checklastname()
    checkemail()
    checkbirthdate()
    checkquantity()
    checklocations()
    checkcheckbox()
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (Validation() == true) {
        ModalSubmit();
        document.querySelector('form').reset();
    } else {
      Validation();
    }
});

function ModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

function closeSubmit() {
    modalSubmit[0].style.display = 'none';
}

closeModalConfirmation[0].addEventListener('click', closeSubmit);
closeBtnConfirmation[0].addEventListener('click', closeSubmit);




// decouverte des commentaires js
/**
 * 
 * @param {String} a 
 * @param {Number} b 
 */
function test (a,b){

    

}