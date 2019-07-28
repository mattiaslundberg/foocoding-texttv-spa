/* eslint-disable no-use-before-define */

// Get textv pages 100 to 110
// Docs: https://texttv.nu/blogg/texttv-api
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.texttv.nu/api/get/100-110');
xhr.addEventListener('load', evt => {
  const pages = JSON.parse(evt.currentTarget.response);
  addPagesListToDOM(pages);
});
xhr.send();

function addPagesListToDOM(pages) {
  const parent = document.getElementById('pages');
  pages.forEach(page => {
    // Create and attach list item for this page
    const listItem = document.createElement('li');
    parent.appendChild(listItem);

    // Create and attach link for this page
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.textContent = `${page.num} - ${page.title}`;
    listItem.appendChild(link);

    // Show page contents on click
    link.addEventListener('click', () => {
      addPageToDOM(page);
    });
  });
}

function addPageToDOM(page) {
  // Show the page content
  const parent = document.getElementById('page');
  parent.innerHTML = '';
  page.content.forEach(content => {
    parent.innerHTML += content;
  });
}
