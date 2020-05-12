fetch( "https://covid19-data.p.rapidapi.com/geojson-us", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid19-data.p.rapidapi.com",
    "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
  }
} ).then( function (casesByState) {
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