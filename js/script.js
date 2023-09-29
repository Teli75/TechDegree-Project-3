// Name Field
// When the page first loads, the first text field should have the focus state by default to prompt the user.

// Use the focus() method on the <input type="text"> element for the "Name" field.

const nameElement = document.querySelector("#name");
nameElement.focus();

/*Job Role Section
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. If the user selects "Other" in the "Job Role" drop-down menu, they can enter info into the "Other job role" text field. This field should be hidden by default and only be displayed if "Other" is selected in the drop-down menu.

Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.*/

//const otherJobSelected = document.querySelector('option[value="Other"]');
//Program the "Job Role" <select> element to listen for changes. When a change is detected, display/hide the "text field" based on the selection in the drop-down menu.

const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");

//hides "other job role" text box by default
otherJobRole.hidden = "true";

// console.log(jobRoleSelect);
// console.log(otherJobRole);

jobRoleSelect.addEventListener("change", (e) => {
  console.log(`you selected: ${e.target.value}`);

  if (e.target.value == "other") {
    otherJobRole.style.display = "block";
    otherJobRole.removeAttribute("hidden");
  } else {
    //otherJobRole.style.visibility='hidden';
    //otherJobRole.removeAttribute('style[display: block]');
    otherJobRole.style.display = "none";
    otherJobRole.hidden = "true";
    //otherJobRole.display='none'
  }
});

//Allows user to access colors available depending on design chosen
const designSelectElement = document.querySelector("#design");
const colorSelectElement = document.querySelector("#color");
const colorOptions = colorSelectElement.children;

colorSelectElement.disabled = "true";

designSelectElement.addEventListener("change", (event) => {
  //colorSelectElement.disabled='false';
  colorSelectElement.removeAttribute("disabled");
  for (let i = 1; i < colorOptions.length; i++) {
    const designTheme = event.target.value;
    const colorTheme = colorSelectElement[i].getAttribute("data-theme");

    console.log(`current design theme${i}: ${designTheme}`);
    console.log(`current color theme${i}: ${colorTheme}`);

    //Displays colors available if theme matches
    if (colorTheme == designTheme) {
      console.log(colorSelectElement[i]);
      colorSelectElement[i].removeAttribute("hidden");
    } else {
      colorSelectElement[i].hidden = "true";
    }
  }
});

const activities = document.querySelectorAll("#activities");
//why don't I need input after activities?"
const total = document.querySelector("#activities-cost");
let totalCost = 0;

//activities.addEventListener("change", () => {
document.querySelector(".activities").addEventListener("change", (e) => {
  const checkedActivity = e.target;
  const checkedActivityCost = +checkedActivity.getAttribute("data-cost");

  console.log(activities);

  if (checkedActivity.checked) {
    console.log(`checkedActivityCost ${checkedActivityCost}`);
    totalCost += checkedActivityCost;
    console.log(`Total: ${totalCost}`);
  } else {
    totalCost -= checkedActivityCost;
  }
  total.innerHTML = `Total: ${totalCost}`;
});

//Program the "I'm going to pay with" <select> element to listen for user changes.

//When a change is detected, hide all payment sections in the form’s UI except the selected one.

const creditCard = document.querySelector(".credit-card");
const payPal= document.querySelector(".paypal");
const bitcoin= document.querySelector(".bitcoin");
//why didn't the id work?

//sets default to credit card selection
const paymentMethod = document.querySelector('#payment');
paymentMethod[1].selected = 'true';

creditCard.style.display= 'block';
payPal.style.display= 'none';
bitcoin.style.display= 'none';
//console.log(paymentMethod.children);

//paymentMethod.children.setAttribute('hidden', true);


paymentMethod.addEventListener("change", (e) => {
  const paymentSelection = e.target.value;
  console.log(paymentSelection);

  if (paymentSelection == 'credit-card') {
    creditCard.style.display= 'block';
    payPal.style.display= 'none';
    bitcoin.style.display= 'none';
  }else{
    creditCard.style.display= 'none';
    paymentMethod.style.display='block';
 
  }
});


const form = document.querySelector('form');
const email = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

console.log(form);
console.log(email);
console.log(cardNumber);
console.log(zipCode);
console.log(cvv);

form.addEventListener('submit', (event) =>{
  const nameValue = nameElement.value;
  const emailValue = email.value;
  const cardValue = cardNumber.value;
  const zipValue = zipCode.value;
  const cvvValue = cvv.value;

  // const nameValidator = () => {
  //   const nameValue = nameElement.value;
  //   console.log(`Name value is: ${nameValue}`);
  //   // 2. Create a variable named `nameIsValid` to store the test value for this input.
  
       const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
       const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
       const cardIsValid = /^\d{13,16}$/.test(cardValue);
       const zipIsValid = /^\d{5}$/.test(zipValue);
       const cvvIsValid = /^\d{3}$/.test(cvvValue);
      


      //  if (nameIsValid){
      //   console.log(`name is valid`);
      //     event.preventDefault();
      //  } 
      //  if (emailIsValid){
      //   console.log(`email is valid`);
      //     event.preventDefault();
      //  } else {
      //   event.preventDefault();
      //  }
      //  if (cardIsValid){
      //   console.log(`card is valid`);
      //     event.preventDefault();
      //  } else {
      //   event.preventDefault();
      //  }
      //  if (zipIsValid){
      //   console.log(`zip is valid`);
      //     event.preventDefault();
      //  } else {
      //   event.preventDefault();
      //  }
      //  if (cvvIsValid){
      //   console.log(`cvv is valid`);
      //     event.preventDefault();
      //  } else {
      //   event.preventDefault();
      //  }
        if (nameIsValid && emailIsValid && cardIsValid && zipIsValid && cvvIsValid){
          console.log('do nothing');
        } else {
          preventDefault();
        }
  //event.preventDefault();
})