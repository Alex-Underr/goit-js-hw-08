import throttle from 'lodash.throttle';

const refsForm = document.querySelector('.feedback-form'); 
const STORAGE_KEY = 'feedback-form-state';
const obj = {email:'', message:''};
fillForm();

refsForm.addEventListener('submit', formSubmit);
refsForm.addEventListener('input', throttle(textInput, 500));

function textInput(evt) {
  obj[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function formSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(obj);
}

function fillForm() {
    const lastInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(lastInput);
    if (lastInput) {
        refsForm.message.value = lastInput.message;
        refsForm.email.value = lastInput.email;
            }
   }