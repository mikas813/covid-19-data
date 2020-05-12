const totalInfoElement = document.querySelector( '.side-bar-info' );

fetch( "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
  }
} )
  .then( function (totalDeaths) {

    return totalDeaths.json()

  } ).then( function (deathsInfo) {

    for (let item in deathsInfo) {

      let block = document.createElement( 'p' );

      totalInfoElement.appendChild( block );
      block.classList.add( item );

      let itemNameToUpperCase = item[0].toUpperCase() + item.slice( 1 );

      block.innerHTML += `${itemNameToUpperCase.split( '_' ).join( ' ' )}: <span>${deathsInfo[item]}`;

    }
  });

