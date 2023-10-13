 
const form = document.getElementById('surveyForm');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

 
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
 
submitBtn.addEventListener('click', () => {
    if (form.checkValidity()) {
         
        showPopup();
    } else {
        alert('Please fill in all the required fields.');
    }
});

 
resetBtn.addEventListener('click', () => {
    form.reset();
});

 
function showPopup() {
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = ''; 

   
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').checked ? 'Male' : 'Female';
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

 
    createLabelAndText('First Name', firstName);
    createLabelAndText('Last Name', lastName);
    createLabelAndText('Date of Birth', dob);
    createLabelAndText('Country', country);
    createLabelAndText('Gender', gender);
    createLabelAndText('Profession', profession);
    createLabelAndText('Email', email);
    createLabelAndText('Mobile Number', mobile);

     
    popup.classList.remove('hidden');
}

 
function createLabelAndText(label, value) {
    const labelElement = document.createElement('label');
    labelElement.textContent = label + ': ';
    const textElement = document.createElement('span');
    textElement.textContent = value;
    popupContent.appendChild(labelElement);
    popupContent.appendChild(textElement);
    popupContent.appendChild(document.createElement('br'));
}

 
closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    form.reset();  
});
