import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

getLocalStorageItems();

function onFormSubmit(event) {
  event.preventDefault();

  consoleFormData(event.currentTarget);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getLocalStorageItems() {
  const storageItem = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!storageItem) return;
  Object.keys(storageItem).forEach(key => {
    formData[key] = storageItem[key];
    const element = formEl.querySelector(`[name="${key}"]`);
    element.value = storageItem[key];
  });
}

function consoleFormData(form) {
  const feedbackData = Object.fromEntries(new FormData(form));
  console.log(feedbackData);
}
