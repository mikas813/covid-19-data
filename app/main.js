import './scss/main.scss';
import './colorado'
import './totalData'
import './byCountryList'

document.querySelector( '.hide-window' ).onclick = () => document.querySelector( '.select-country' ).classList.toggle( 'full-height' );

let countrySearchInput = document.getElementById( 'search-input' );
let allCountries = document.getElementsByClassName( 'search-country' );

function hideAllCounties() {

    for (let i = 0; i < allCountries.length; i++) {
        allCountries[i].style.display = "none";
        if (allCountries[i].getAttribute( 'href' ).substr( 1 )[0] === countrySearchInput.value.toLowerCase() || allCountries[i].getAttribute( 'href' ).substr( 1 ) === countrySearchInput.value.toLowerCase()) {
            allCountries[i].style.display = 'block'
        } else if (countrySearchInput.value === '') {
            allCountries[i].style.display = "block";
        }
    }
}

countrySearchInput.onkeyup = hideAllCounties;

var btn = $( '#button' );

$( window ).scroll( function () {
    if ($( window ).scrollTop() > 300) {
        btn.addClass( 'show' );
    } else {
        btn.removeClass( 'show' );
    }
} );
btn.on( 'click', function (e) {
    e.preventDefault();
    $( 'html, body' ).animate( {scrollTop: 0}, '300' );
} );


