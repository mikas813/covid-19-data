fetch( 'https://covid19-data.p.rapidapi.com/geojson-us', {
  'method': 'GET',
  'headers': {
    'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
    'x-rapidapi-key': '6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d'
  }
} ).then( function (casesByState) {

  return casesByState.json();
} ).then( function (usaDeathsInfo) {

  console.log( 'us', usaDeathsInfo );
  const stateName = document.createElement( 'div' );
  const usaInner = document.querySelector( '.usa' );


  for (let key in usaDeathsInfo.features) {
    if (usaDeathsInfo.features[key].properties.name === 'Colorado') {
      console.log( 'dsffdsfds' );
      stateName.classList.add( usaDeathsInfo.features[key].properties.name.toLowerCase() );
      const infoInner = document.createElement( 'p' );
      infoInner.innerHTML +=
        `In <span class="state">${usaDeathsInfo.features[key].properties.name}</span>
              confirmed: <span class="cases">${usaDeathsInfo.features[key].properties['confirmed']}</span>
              deaths: <span class="cases">${usaDeathsInfo.features[key].properties['deaths']}</span>
        `;
      stateName.append( infoInner );
      usaInner.append( stateName );
    }
  }
} );

