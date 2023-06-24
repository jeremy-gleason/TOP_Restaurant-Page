const loadContact = () => {
  const contentDiv = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'Contact';

  const pageImg = document.createElement('img');
  pageImg.src = 'contact.jpg';

  const para1 = document.createElement('p');
  para1.textContent = "Information to contact Welcome Home Kitchen can be found below.";
  para1.style.fontWeight = 'bold';

  const para2 = document.createElement('p');
  para2.textContent = 'Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lacus viverra vitae congue eu consequat ac felis donec et. Porttitor rhoncus dolor purus non enim praesent. Sed nisi lacus sed viverra tellus in hac habitasse platea. Tristique nulla aliquet enim tortor at auctor urna. Vulputate ut pharetra sit amet.';

  contentDiv.appendChild(header);
  contentDiv.appendChild(pageImg);
  contentDiv.appendChild(para1);
  contentDiv.appendChild(para2);
}

export { loadContact };