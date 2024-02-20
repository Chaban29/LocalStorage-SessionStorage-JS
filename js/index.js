'use strict';

localStorage.clear();

localStorage.name = 'Roman Chaban';
localStorage.age = 23;
localStorage.age = 25;

console.log(localStorage.getItem('name'));

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue;
  }
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const keys_5 = Object.keys(localStorage);

for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

localStorage.clear();

localStorage.user = JSON.stringify({ name: 'Roman' }, null, 2);
let user_1 = JSON.parse(localStorage.user);
console.log(localStorage.user);

console.log(user.name);

const setName = localStorage.setItem('name', 'Roman Chaban');
const setAge = localStorage.setItem('age', 23);

const keys_4 = Object.keys(localStorage);

for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const name = 'Roman';

localStorage.setItem('name', name);

localStorage.removeItem('name');

console.log(localStorage.getItem('name'));

console.log(localStorage.key(0));

localStorage.setItem('name', 'Roman');

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue;
  }
  console.log(key, localStorage[key]);
}

const keys_2 = Object.keys(localStorage);

for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

localStorage.setItem('name', 'Roman');

let keys_1 = Object.keys(localStorage);

for (let key of keys_1) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const clearButton = document.getElementById('clear');
const area = document.getElementById('area');
area.placeholder = 'Text here';

clearButton.addEventListener('click', () => {
  localStorage.removeItem('area');
  area.value = '';
});

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
};

const form = document.querySelector('.form');
const formFields = form.elements;
const buttonSubmit = form.querySelector("[type='submit']");
buttonSubmit.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
}

function changeHandler() {
  if (this.type !== 'checkbox') {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value);
  } else {
    console.log(this.name, this.checked);
    localStorage.setItem(this.name, this.checked);
  }
}

function checkStorage() {
  for (let i = 0; i < formFields.length; i++) {
    if (formFields[i].type !== 'submit') {
      if (formFields[i].type === 'checked') {
        formFields[i].checked = localStorage.getItem(formFields[i]);
      } else {
        formFields[i].value = localStorage.getItem(formFields[i]);
      }
    }
  }
  attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener('change', changeHandler);
  }
}

checkStorage();

localStorage.setItem('number', 100);

console.log(localStorage.getItem('number'));

localStorage.name = 'Roman';

console.log(localStorage);

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue;
  }
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const keys = Object.keys(localStorage);

for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

let user = {
  name: 'Roman',
  ['last name']: 'Chaban',
  age: 23,
};

localStorage.setItem('user', JSON.stringify(user));

let userName = JSON.parse(localStorage.user);

console.log(userName.name);

sessionStorage.setItem('user', JSON.stringify(user));

sessionStorage.clear();

localStorage.setItem('data', new Date().toLocaleDateString());
console.log(localStorage.getItem('data'));

const arr = [1, 2, 3, 4, 5];
localStorage.setItem('arr', JSON.stringify(arr));

let result = localStorage.getItem('arr');

console.log(typeof result);

localStorage.clear();

localStorage.setItem('name', 'Roman');
localStorage.setItem('last name', 'Chaban');

console.log(localStorage.key(1));
console.log(localStorage.length);
