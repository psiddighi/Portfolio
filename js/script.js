// Menubarfix
// Selecteer de checkbox, het overlay menu en de achtergrond van de pagina
const checkbox = document.querySelector('.checkbox');
const overlayMenu = document.getElementById('overlayMenu');
const overlayContent = document.querySelector('.overlay-content');
const body = document.querySelector('body');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    overlayMenu.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    overlayMenu.style.display = 'none';
    body.style.overflow = 'visible';
  }
});

window.addEventListener('click', function(event) {
  if (!overlayContent.contains(event.target) && event.target !== checkbox) {
    checkbox.checked = false;
    overlayMenu.style.display = 'none';
    body.style.overflow = 'visible';
  }
});

// Nieuwe event listener voor het 'keydown' event
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    checkbox.checked = false;
    overlayMenu.style.display = 'none';
    body.style.overflow = 'visible';
  }
});

// resume
document.getElementById('downloadAndOpen').addEventListener('click', function(event) {
  // Prevent the default download behavior
  event.preventDefault();

  // Get the href attribute of the <a> tag
  const href = this.getAttribute('href');

  // Open the file in a new tab
  window.open(href, '_blank');

  // Programmatically click the <a> tag to trigger the download
  this.click();
});

// scroll to top button

// Krijg de button
let mybutton = document.getElementById("myBtn");

// Wanneer de gebruiker scrolt, laat de button zien of verberg deze
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "block";
  }
}

// Wanneer de gebruiker op de button klikt, scroll naar de top van het document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Voor een soepel scroll-effect
  });
}