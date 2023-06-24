const loadHome = () => {
  const contentDiv = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'Welcome Home Kitchen';

  const pageImg = document.createElement('img');
  pageImg.src = 'kitchen-home.jpg';

  const para1 = document.createElement('p');
  para1.textContent = 'At Welcome Home Kitchen we strive to \
  provide warm home-cooked meals everyday.';
  para1.style.fontWeight = 'bold';

  const para2 = document.createElement('p');
  para2.textContent = 'Lorem ipsum dolor sit amet, consectetur \
  adipiscing elit, sed do eiusmod tempor incididunt ut labore \
  et dolore magna aliqua. Ut enim ad minim veniam, quis \
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
  commodo consequat. Duis aute irure dolor in reprehenderit in \
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, sunt in \
  culpa qui officia deserunt mollit anim id est laborum.';

  contentDiv.appendChild(header);
  contentDiv.appendChild(pageImg);
  contentDiv.appendChild(para1);
  contentDiv.appendChild(para2);
}

export { loadHome };