const infoByCountryElement = document.querySelector( '.main-section-info' );

fetch( "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
  }
} )
  .then(
    function (response) {
      return response.json()
    } )
  .then( function (info) {

    let countriesForSelect = [];
    for (let key in info) {
      for (let i = 0; i < info[key].length; i++) {
        let contentInner = document.createElement( 'article' );
        let flagInner = document.createElement( 'img' );

        infoByCountryElement.appendChild( contentInner );
        let classNameByCountry = info[key][i]['country_name'];
        if (classNameByCountry === '') {
          classNameByCountry = 'empty';
        }

        if (typeof classNameByCountry === 'string' && classNameByCountry !== '') {
          contentInner.setAttribute( 'data-country-name', classNameByCountry );
          countriesForSelect += info[key][i]['country_name'] + '*';
          classNameByCountry = classNameByCountry.toLowerCase();
          classNameByCountry = classNameByCountry.split( ' ' ).join( '_' );
          contentInner.classList.add( classNameByCountry, 'country_inner' );
          contentInner.setAttribute( "id", classNameByCountry );
          if (contentInner.classList.contains( classNameByCountry )) {
            flagInner.classList.add( 'country-flag', classNameByCountry );
            flagInner.setAttribute('loading', 'lazy');
            flagInner.setAttribute( 'src', `./${classNameByCountry}.png` );
            contentInner.appendChild( flagInner );
          }
          let indexInner = document.createElement('span');
          indexInner.setAttribute('class', 'country-index');
          indexInner.innerHTML = i;
          contentInner.appendChild(indexInner)
        }

        for (let item in info[key][i]) {
          let countryInfo = document.createElement( 'p' );
          contentInner.appendChild( countryInfo );
          countryInfo.classList.add( item, 'country_info' );
          let itemNameToUpperCase = item[0].toUpperCase() + item.slice( 1 );
          countryInfo.innerHTML += `${itemNameToUpperCase.split( '_' ).join( ' ' )}: <span>${info[key][i][item]}`;
        }

      }
    }
    let selectForCountries = document.querySelector( '.select-country' );
    let ancorsWrapper = document.createElement('div');
    ancorsWrapper.setAttribute('class', 'ancors-wrapper');
    countriesForSelect = countriesForSelect.split( '*' ).sort();
    for (let key in countriesForSelect) {
      let anchorForCountry = document.createElement( 'a' );
      ancorsWrapper.appendChild( anchorForCountry );
      anchorForCountry.innerHTML += countriesForSelect[key];
      anchorForCountry.setAttribute( "href", "#" + countriesForSelect[key].toLowerCase().split( ' ' ).join( '_' ) );
      anchorForCountry.classList.add( 'search-country' );
    }
    selectForCountries.appendChild(ancorsWrapper);
  } );