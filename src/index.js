import { loadPage } from "./PageLoad";

const htmlBody = document.querySelector('#content');

const navBar = document.createElement('ul');
const navItem1 = document.createElement('li');
navItem1.textContent = 'Home';
const navItem2 = document.createElement('li');
navItem2.textContent = 'Menu';
const navItem3 = document.createElement('li');
navItem3.textContent = 'Contact';

navBar.appendChild(navItem1);
navBar.appendChild(navItem2);
navBar.appendChild(navItem3);

htmlBody.appendChild(navBar);

loadPage();