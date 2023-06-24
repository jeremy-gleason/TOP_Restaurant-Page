const loadMenu = () => {
  const contentDiv = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'Menu';

  const pageImg = document.createElement('img');
  pageImg.src = 'menu.jpg';

  const para1 = document.createElement('p');
  para1.textContent = "Below is a lovely list of Welcome Home \
  Kitchen's homemade meals."

  const para2 = document.createElement('p');
  para2.textContent = 'Lorem sed risus ultricies tristique nulla aliquet enim. Cursus vitae congue mauris rhoncus aenean vel. Sit amet consectetur adipiscing elit ut aliquam purus sit. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Sit amet tellus cras adipiscing enim eu.';

  contentDiv.appendChild(header);
  contentDiv.appendChild(pageImg);
  contentDiv.appendChild(para1);
  contentDiv.appendChild(para2);
}

export { loadMenu };