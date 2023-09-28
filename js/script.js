console.log("Test");

// Name Field
// When the page first loads, the first text field should have the focus state by default to prompt the user.

// Use the focus() method on the <input type="text"> element for the "Name" field.

document.querySelector("#name").focus();

/*Job Role Section
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. If the user selects "Other" in the "Job Role" drop-down menu, they can enter info into the "Other job role" text field. This field should be hidden by default and only be displayed if "Other" is selected in the drop-down menu.

Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.*/


//const otherJobSelected = document.querySelector('option[value="Other"]');
//Program the "Job Role" <select> element to listen for changes. When a change is detected, display/hide the "text field" based on the selection in the drop-down menu.

const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector('#other-job-role');

//hides "other job role" text box by default
otherJobRole.hidden='true';

// console.log(jobRoleSelect);
// console.log(otherJobRole);

jobRoleSelect.addEventListener("change", (e) => {
   console.log(`you selected: ${e.target.value}`);


    if (e.target.value == "other") {
      otherJobRole.style.display="block"
      otherJobRole.removeAttribute('hidden');
      
    } else {
      //otherJobRole.style.visibility='hidden';
      //otherJobRole.removeAttribute('style[display: block]');
      otherJobRole.style.display='none';
      otherJobRole.hidden='true';
      //otherJobRole.display='none'
    }
});

//Allows user to access colors available depending on design chosen
const designSelectElement = document.querySelector('#design');
const colorSelectElement = document.querySelector('#color');
const colorOptions = colorSelectElement.children;

colorSelectElement.disabled='true';

designSelectElement.addEventListener('change', (event) => {
  //colorSelectElement.disabled='false';
  colorSelectElement.removeAttribute('disabled');
  for (let i=1; i < colorOptions.length; i++){

    const designTheme = event.target.value;
    const colorTheme = colorSelectElement[i].getAttribute('data-theme');
    
    console.log(`current design theme${i}: ${designTheme}`);
    console.log(`current color theme${i}: ${colorTheme}`);

    //Displays colors available if theme matches
    if(colorTheme == designTheme){
      console.log(colorSelectElement[i]);
     colorSelectElement[i].removeAttribute('hidden');
        
    } else {
      colorSelectElement[i].hidden='true';
    }
  }
  });

const registerForActivities = document.querySelector('#activities');
const total = document.querySelector('#activities-cost');
const totalCost = 0;

registerForActivities.addEventListener('change', () => {
  const costPerActivity = registerForActivities.getAttribute(+'data-cost');
})

console.log(registerForActivities);
console.log(total);



//


