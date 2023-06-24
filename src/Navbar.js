const loadNav = () => {
  const navBar = document.querySelector('nav');
  
  const navBtn1 = document.createElement('button');
  navBtn1.setAttribute('id', 'home');
  navBtn1.textContent = 'Home';
  const navBtn2 = document.createElement('button');
  navBtn2.setAttribute('id', 'menu');
  navBtn2.textContent = 'Menu';
  const navBtn3 = document.createElement('button');
  navBtn3.setAttribute('id', 'contact');
  navBtn3.textContent = 'Contact';
  
  navBar.appendChild(navBtn1);
  navBar.appendChild(navBtn2);
  navBar.appendChild(navBtn3);
}

export { loadNav };