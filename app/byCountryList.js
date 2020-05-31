fetch( 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
  'method': 'GET',
  'headers': {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d'
  }
} )
  .then(
    function (response) {
      return response.json();
    } )
  .then( function (info) {

    let contentInner;
    let countriesForSelect = [];
    let countryInput = document.querySelector( '#search-input' );

    const selectInner = document.querySelector( '.select-country' );
    const infoByCountryElement = document.createElement( 'main' );
    infoByCountryElement.classList.add( 'main-section-info' );

    for (let key in info.countries_stat) {
      //On every iteration create an article tag and img tag!
      contentInner = document.createElement( 'article' );
      let flagInner = document.createElement( 'img' );
      //Than root element append every article
      infoByCountryElement.append( contentInner );
      //This variable contains classes created from api object using split and join methods
      let classNameByCountry = info.countries_stat[key].country_name;
      countriesForSelect.push( classNameByCountry );
      classNameByCountry = classNameByCountry
        .split( ' ' )
        .join( '_' )
        .toLowerCase();
      //For every img tag adds class equal to its country and one common class, attribute loading-lazy and src
      // attribute
      flagInner.classList.add( 'country-flag', classNameByCountry );
      flagInner.setAttribute( 'loading', 'lazy' );
      flagInner.setAttribute( 'src', `./img/${classNameByCountry}.png` );
      //Every article get class, id and append img tag equal to its class name
      contentInner.classList.add( classNameByCountry, 'country_inner' );
      contentInner.setAttribute( 'id', classNameByCountry );
      contentInner.append( flagInner );
      //This variable create on every iteration an span with index + 1 of its parent than parent append child
      const indexInner = document.createElement( 'span' );
      indexInner.setAttribute( 'class', 'country-index' );
      indexInner.innerHTML = +key + 1;
      contentInner.appendChild( indexInner );
      //This iteration create a p tag for every key and name of object set class equal to its key and set text content
      for (let item in info.countries_stat[key]) {
        let countryInfo = document.createElement( 'p' );
        countryInfo.classList.add( item, 'country_info' );
        let itemNameToUpperCase = item[0].toUpperCase() + item.slice( 1 );
        countryInfo.innerHTML += `${itemNameToUpperCase.split( '_' ).join( ' ' )}: ${info.countries_stat[key][item]}`;
        contentInner.appendChild( countryInfo );
      }
    }

    //Create an array with ordered countries for search select and add to each element a wrapper tag 'a' with
    // href attribute equal to its text content!
    countriesForSelect = countriesForSelect.sort();
    countriesForSelect.forEach( item => {
      let el = document.createElement( 'a' );
      el.textContent = item;
      el.setAttribute( 'href', `#${item.toLowerCase().split( ' ' ).join( '_' )}` );
      el.classList.add( 'active-ancor' );
      selectInner.append( el );
    } );


    //An array for search function
    const countries = selectInner.querySelectorAll( '.active-ancor' );

    //Function that search country by name using indexOf() method
    function searchCountry() {
      for (let i = 0; i < countries.length; i++) {
        countries[i].style.display = countries[i].innerText
          .toLowerCase()
          .indexOf( countryInput.value.toLowerCase() ) > -1 ? '' : 'none';
      }
    }

    countryInput.addEventListener( 'input', searchCountry );

    infoByCountryElement.append( contentInner );
    const root = document.querySelector( '.app' );
    root.append( infoByCountryElement );
  } );