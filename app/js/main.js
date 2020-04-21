const totalInfoElement = document.querySelector( '.side-bar-info' );
const infoByCountryElement = document.querySelector( '.main-section-info' );

fetch( "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
} )
    .then( function (totalDeaths) {
        return totalDeaths.json()
    } )
    .then( function (deathsInfo) {
        for (let item in deathsInfo) {
            let block = document.createElement( 'p' );
            totalInfoElement.appendChild( block );
            block.classList.add( item );
            let itemNameToUpperCase = item[0].toUpperCase() + item.slice( 1 );
            block.innerHTML += `${itemNameToUpperCase.split( '_' ).join( ' ' )}: <span>${deathsInfo[item]}`;
        }
    } );
fetch( "https://covid19-data.p.rapidapi.com/geojson-us", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
} )
    .then( function (casesByState) {
        return casesByState.json()
    } )
    .then( function (usaDeathsInfo) {
        let stateName = document.createElement( 'div' );
        let usaInner = document.querySelector( '.usa' )
        for (let key in usaDeathsInfo) {
            for (let item in usaDeathsInfo[key]) {
                for (let k in usaDeathsInfo[key][item]) {
                    if (usaDeathsInfo[key][item][k]['name'] === 'Colorado') {
                        stateName.classList.add( usaDeathsInfo[key][item][k]['name'].toLowerCase() );
                        let infoInner = document.createElement( 'p' );
                        infoInner.innerHTML += `In <span class="state">${usaDeathsInfo[key][item][k]['name']}</span> confirmed: <span class="cases">${usaDeathsInfo[key][item][k]['confirmed']}</span> deaths: <span class="cases">${usaDeathsInfo[key][item][k]['deaths']}</span>`
                        stateName.appendChild( infoInner );
                        usaInner.appendChild( stateName );
                    }
                }
            }
        }
    } );

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
        // console.log(info)


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
                        flagInner.setAttribute( 'src', `./flags/${classNameByCountry}.png` );
                        contentInner.appendChild( flagInner );
                    }
                    let indexInner = document.createElement('span');
                    indexInner.setAttribute('class', 'country-index');
                    indexInner.innerHTML = i;
                    console.log(indexInner)
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


