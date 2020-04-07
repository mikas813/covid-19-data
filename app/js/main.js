const totalInfoElement = document.querySelector('.side-bar-info');
const infoByCountryElement = document.querySelector('.main-section-info');
const selectForCountries = document.querySelector('.select-country');


fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
})
    .then(function (totalDeaths) {
        return totalDeaths.json()
    })
    .then(function (deathsInfo) {
        for (let item in deathsInfo) {
            let block = document.createElement('p');
            totalInfoElement.appendChild(block);
            block.classList.add(item);
            let itemNameToUpperCase = item[0].toUpperCase() + item.slice(1);
            block.innerHTML += `${itemNameToUpperCase.split('_').join(' ')}: <span>${deathsInfo[item]}`;
        }
    })
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
})
    .then(
        function (response) {
            return response.json()
        })
    .then(function (info) {
    let countriesForSelect = [];
        for (let key in info) {
            for (var i = 0; i < info[key].length; i++) {
                let contentInner = document.createElement('article');
                contentInner.style.marginBottom = "40px";
                infoByCountryElement.appendChild(contentInner);


                let classNameByCountry = info[key][i]['country_name'];

                if (typeof classNameByCountry === 'string') {
                    classNameByCountry = classNameByCountry.toLowerCase();
                    classNameByCountry = classNameByCountry.split(' ').join('_');
                    contentInner.classList.add(classNameByCountry, 'country_inner');
                    contentInner.setAttribute("id", classNameByCountry);
                    countriesForSelect += classNameByCountry;
                    let anchorForCountry = document.createElement('a');
                    selectForCountries.appendChild(anchorForCountry);
                    anchorForCountry.innerHTML +=  info[key][i]['country_name'];
                    anchorForCountry.setAttribute("href", "#"+classNameByCountry)
                }
                for (let item in info[key][i]) {
                    let countryInfo = document.createElement('p');
                    contentInner.appendChild(countryInfo);
                    countryInfo.classList.add(item, 'country_info');
                    let itemNameToUpperCase = item[0].toUpperCase() + item.slice(1);
                    countryInfo.innerHTML += `${itemNameToUpperCase.split('_').join(' ')}: <span>${info[key][i][item]}`;

                }
                contentInner.innerHTML += `<span class="index">${i + 1}`
            console.log(classNameByCountry)
            }
        }
    })


document.querySelector('.hide-window').onclick =()=> document.querySelector('.select-country').classList.toggle('full-height');

