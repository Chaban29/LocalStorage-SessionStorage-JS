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

const keys = Object.keys(localStorage);

for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

localStorage.clear();

localStorage.user = JSON.stringify({ name: 'Roman' }, null, 2);
let user = JSON.parse(localStorage.user);
console.log(localStorage.user);

console.log(user.name);
