import { loadNav } from "./Navbar";
import { loadHome } from "./Home";
import { loadMenu } from "./Menu";
import { loadContact } from "./Contact";

const clearPage = () => {
  const contentDiv = document.querySelector('#content');
  while (contentDiv.hasChildNodes()) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

loadNav();

document.querySelector('nav').addEventListener('click', (e) => {
  clearPage();
  if (e.target.id === 'home') {
    loadHome();
  }
  if (e.target.id === 'menu') {
    loadMenu();
  }
  if (e.target.id === 'contact') {
    loadContact();
  }
  for (const navBtn of document.querySelectorAll('button')) {
    navBtn.classList.remove('active');
  }
  e.target.classList.add('active');
});

loadHome();
document.querySelector('#home').classList.add('active');