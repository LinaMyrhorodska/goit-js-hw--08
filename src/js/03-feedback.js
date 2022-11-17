import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSumbit);
refs.form.addEventListener('input', throttle(onInput, 500));

const keyMail = 'email';
const keyMessage = 'message';

onLocalStorageItems();

function onLocalStorageItems(props) {
    if (localStorage.getItem(keyMail)) {
        refs.email.value = localStorage.getItem(keyMail);
    }
    if (localStorage.getItem(keyMessage)) {
        refs.message.value = localStorage.getItem(keyMessage);
    }
}

function onFormSumbit(event) {
    event.preventDefault();
    
  infoFormData(event.currentTarget);
  event.currentTarget.reset();
  localStorage.removeItem(keyMail);
  localStorage.removeItem(keyMessage);
}

function infoFormData(form) {
    const feedbackInfo = {};
    new FormData(form).forEach((value, key) => (feedbackInfo[key] = value));
    console.log('feedbackInfo', feedbackInfo);
}

function onInput(event) {
    if (event.target.name === 'email')
        localStorage.setItem(keyMail, event.target.value);
    if (event.target.name === 'message')
        localStorage.setItem(keyMessage, event.target.value);
}

