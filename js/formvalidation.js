//----------------- Form Validation -------------- 

function validateForm(e) {

  e.preventDefault();
  // console.log(e);

  let form = e.target;

  // ------ for Name input -------------

  if(form.name.value.length == 0) {
    
    form.name.setCustomValidity("Udfyld dit navn !...");
    form.name.nextElementSibling.textContent = form.name.validationMessage;
    form.name.focus();
    return false;
  } else {
    form.name.nextElementSibling.textContent = "";
    form.name.setCustomValidity("");
  }
  
  // ------- for Post number ---------
  
  if(form.postnr.value.length == 0) {

    form.postnr.setCustomValidity("Udfyld dit post nummer !...");
    form.postnr.nextElementSibling.textContent = form.postnr.validationMessage;
    form.postnr.focus();
    return false;
  } else if (isNaN(form.postnr.value)){
    form.postnr.setCustomValidity("Ikke Nr. !...")
    form.postnr.nextElementSibling.textContent = form.postnr.validationMessage;
    form.postnr.focus();
    return false;
  } else if (form.postnr.value.length !== 4){
    form.postnr.setCustomValidity("Ikke andet end 4!...")
    form.postnr.nextElementSibling.textContent = form.postnr.validationMessage;
    form.postnr.focus();
    return false;
  } else {
    form.postnr.nextElementSibling.textContent = "";
    form.postnr.setCustomValidity("");
  }
  
  // ------- for e-mail ---------
  
  if(form.email.value.length == 0) {
    
    form.email.setCustomValidity("Udfyld dit email !...");
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
    return false;
  } else if (!checkEmail(form.email.value)){
    form.email.setCustomValidity("Ikke valid email!...")
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
    return false;
  } else {
    form.email.nextElementSibling.textContent = "";
    form.email.setCustomValidity("");
  }
  
  // ------- for Telefon Nr. ---------
  
  if(form.telefon.value.length == 0) {
    
    form.telefon.setCustomValidity("Udfyld dit telefon nummer !...");
    form.telefon.nextElementSibling.textContent = form.telefon.validationMessage;
    form.telefon.focus();
    return false;
  } else if (isNaN(form.telefon.value)){
    form.telefon.setCustomValidity("Ikke Nr. !...")
    form.telefon.nextElementSibling.textContent = form.telefon.validationMessage;
    form.telefon.focus();
    return false;
  } else if (form.telefon.value.length !== 8){
    form.telefon.setCustomValidity("Ikke andet end 8!...")
    form.telefon.nextElementSibling.textContent = form.telefon.validationMessage;
    form.telefon.focus();
    return false;
  } else {
    form.telefon.nextElementSibling.textContent = "";
    form.telefon.setCustomValidity("");
  }

  // ------- for message ---------
  
  if(form.message.value.length == 0) {
  
    form.message.setCustomValidity("Skriv noget her...");
    form.message.nextElementSibling.textContent = form.message.validationMessage;
    form.message.focus();
    return false;
  } else if (form.message.value.length < 10){
    form.message.setCustomValidity("Minimum 10 ord!...")
    form.message.nextElementSibling.textContent = form.message.validationMessage;
    form.message.focus();
    return false;
  } else {
    form.message.nextElementSibling.textContent = "";
    form.message.setCustomValidity("");
  }

  // ----- Check and submit the form --------
  if(form.checkValidity()) {
    form.submit();
  }
}

function checkEmail(email) {
  var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([ a-zA-Z0-9]{2,})+$/; 
  if (emailRegEx.test(email)){ 
    return true; 
  } 
  return false; 
}