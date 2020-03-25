fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
})
    .then( function (totalDeaths) {
        return totalDeaths.json()
    })
    .then(function (deathsInfo) {
        // console.log(deathsInfo)
        document.querySelector('.total_cases').innerHTML = deathsInfo['total_cases'];
        document.querySelector('.total_deaths').innerHTML = deathsInfo['total_deaths'];
        document.querySelector('.total_recovered').innerHTML = deathsInfo['total_recovered'];

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
        // console.log(info);
        document.querySelector('.time').textContent = info.statistic_taken_at.substring(0, info.statistic_taken_at.length - 8);

        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'China') {
                    document.querySelector('.china_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.china_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.china_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.china_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.china_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.china_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.china_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.china_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.china_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }

            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'Italy') {
                    document.querySelector('.it_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.it_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.it_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.it_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.it_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.it_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.it_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.it_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.it_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }

            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'USA') {
                    document.querySelector('.usa_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.usa_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.usa_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.usa_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.usa_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.usa_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.usa_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.usa_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.usa_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }
            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'Portugal') {
                    document.querySelector('.pt_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.pt_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.pt_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.pt_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.pt_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.pt_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.pt_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.pt_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.pt_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }
            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'Ukraine') {
                    document.querySelector('.ua_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.ua_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.ua_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.ua_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.ua_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.ua_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.ua_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.ua_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.ua_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }
            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'Venezuela') {
                    document.querySelector('.ve_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.ve_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.ve_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.ve_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.ve_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.ve_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.ve_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.ve_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.ve_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }
            }
        }
        for (let key in info) {
            for (let i in info[key]) {
                if (info[key][i]['country_name'] === 'Argentina') {
                    document.querySelector('.arg_country').textContent = info[key][i]['country_name'];
                    document.querySelector('.arg_cases').textContent = info[key][i]['cases'];
                    document.querySelector('.arg_deaths').textContent = info[key][i]['deaths'];
                    document.querySelector('.arg_total_recovered').textContent = info[key][i]['total_recovered'];
                    document.querySelector('.arg_new_deaths').textContent = info[key][i]['new_deaths'];
                    document.querySelector('.arg_new_cases').textContent = info[key][i]['new_cases'];
                    document.querySelector('.arg_serious_critical').textContent = info[key][i]['serious_critical'];
                    document.querySelector('.arg_active_cases').textContent = info[key][i]['active_cases'];
                    document.querySelector('.arg_total_cases_per_1m_population').textContent = info[key][i]['total_cases_per_1m_population'];
                }
            }
        }

    })


