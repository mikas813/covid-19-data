import './scss/main.scss';
import './colorado';
import './totalData';
import './byCountryList';

//Get the burger button and input
const burgerButton = document.querySelector( '.hide-window' );
const input = document.querySelector( '.country-search-input' );

//Function that toggle state of select
function closeSelect(e) {
  if (e.target.className === 'hide-window') {
    document.querySelector( '.select-country ' ).classList.toggle( 'full-height' );
  } //If clicked outside of select hide select
  if (e.target !== burgerButton && e.target !== input) {
    document.querySelector( '.select-country ' ).classList.remove( 'full-height' );
    input.value = '';
  }
}

document.addEventListener( 'click', closeSelect );

//Get the button:
const rootElement = document.querySelector( '.app' );
const toTopButton = document.createElement( 'button' );
toTopButton.classList.add( 'scrollTop' );
rootElement.append( toTopButton );

// When the user scrolls down 20px from the top of the document, show the button
document.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

toTopButton.addEventListener( 'click', topFunction );