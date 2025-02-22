const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#emailErrorMessage");
const country = document.querySelector("#country");
const countryErrorMessage = document.querySelector("#countryErrorMessage");
const password = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#passwordErrorMessage");
const confirmpassword = document.querySelector("#confirmpassword");
const confirmpasswordErrorMessage = document.querySelector("#confirmpasswordErrorMessage");


email.addEventListener("input",(event)=>{
 if(email.validity.valid){
    emailErrorMessage.textContent="";
 }else{
    showEmailError();
 }
 
})


password.addEventListener("input",(event)=>{
    if(password.validity.valid){
       passwordErrorMessage.textContent="";
    }else{
       passwordError();
    }
    
   })

   confirmpassword.addEventListener("input",(event)=>{
    if(confirmpassword.validity.valid){
       confirmpasswordErrorMessage.textContent="";
    }else{
       confirmPassword();
    }
    
   })

function showEmailError(){
    if(email.validity.valueMissing){
        emailErrorMessage.textContent ="cannot be left empty"
    }

    if(email.validity.typeMismatch){
        emailErrorMessage.textContent = "should be an email"
    }
}

form.addEventListener("submit",(event)=>{
    countryError()
    showEmailError();
    passwordError();
    confirmPassword();
    event.preventDefault();
   
})

function countryError(){
    if(!country.validity.valid){
        countryErrorMessage.textContent = "select a country"
    }
}

function passwordError(){
    if(password.validity.valueMissing){
        passwordErrorMessage.textContent = "cannot be empty"
    }
    if(password.validity.tooShort){
        passwordErrorMessage.textContent = "should be at least 8 characters"
    }
}

function confirmPassword(){
    if(confirmpassword.validity.valueMissing){
        confirmpasswordErrorMessage.textContent = "cannot be empty"
    }
    if(confirmpassword.value != password.value){
        confirmpasswordErrorMessage.textContent = "password dont match"
    }
}