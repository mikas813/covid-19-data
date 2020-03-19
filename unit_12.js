fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6d291bb001msh74f879e7cae0d1ep1a2a38jsnfdb0b0ba682d"
    }
})
    .then(
        function (response) {
            return response.json() })
    .then( function (info) {
        document.querySelector('.time').textContent = info.statistic_taken_at;

        console.log(info);
        document.querySelector('.it_country').textContent = info.countries_stat[1]['country_name'];
        document.querySelector('.it_cases').textContent = info.countries_stat[1]['cases'];
        document.querySelector('.it_deaths').textContent = info.countries_stat[1]['deaths'];
        document.querySelector('.it_total_recovered').textContent = info.countries_stat[1]['total_recovered'];
        document.querySelector('.it_new_deaths').textContent = info.countries_stat[1]['new_deaths'];
        document.querySelector('.it_new_cases').textContent = info.countries_stat[1]['new_cases'];
        document.querySelector('.it_serious_critical').textContent = info.countries_stat[1]['serious_critical'];
        document.querySelector('.it_active_cases').textContent = info.countries_stat[1]['active_cases'];
        document.querySelector('.it_total_cases_per_1m_population').textContent = info.countries_stat[1]['total_cases_per_1m_population'];

        document.querySelector('.usa_country').textContent = info.countries_stat[5]['country_name'];
        document.querySelector('.usa_cases').textContent = info.countries_stat[5]['cases'];
        document.querySelector('.usa_deaths').textContent = info.countries_stat[5]['deaths'];
        document.querySelector('.usa_total_recovered').textContent = info.countries_stat[5]['total_recovered'];
        document.querySelector('.usa_new_deaths').textContent = info.countries_stat[5]['new_deaths'];
        document.querySelector('.usa_new_cases').textContent = info.countries_stat[5]['new_cases'];
        document.querySelector('.usa_serious_critical').textContent = info.countries_stat[5]['serious_critical'];
        document.querySelector('.usa_active_cases').textContent = info.countries_stat[5]['active_cases'];
        document.querySelector('.usa_total_cases_per_1m_population').textContent = info.countries_stat[5]['total_cases_per_1m_population'];

        document.querySelector('.ua_country').textContent = info.countries_stat[104]['country_name'];
        document.querySelector('.ua_cases').textContent = info.countries_stat[104]['cases'];
        document.querySelector('.ua_deaths').textContent = info.countries_stat[104]['deaths'];
        document.querySelector('.ua_total_recovered').textContent = info.countries_stat[104]['total_recovered'];
        document.querySelector('.ua_new_deaths').textContent = info.countries_stat[104]['new_deaths'];
        document.querySelector('.ua_new_cases').textContent = info.countries_stat[104]['new_cases'];
        document.querySelector('.ua_serious_critical').textContent = info.countries_stat[104]['serious_critical'];
        document.querySelector('.ua_active_cases').textContent = info.countries_stat[104]['active_cases'];
        document.querySelector('.ua_total_cases_per_1m_population').textContent = info.countries_stat[104]['total_cases_per_1m_population'];

        document.querySelector('.pt_country').textContent = info.countries_stat[19]['country_name'];
        document.querySelector('.pt_cases').textContent = info.countries_stat[19]['cases'];
        document.querySelector('.pt_deaths').textContent = info.countries_stat[19]['deaths'];
        document.querySelector('.pt_total_recovered').textContent = info.countries_stat[19]['total_recovered'];
        document.querySelector('.pt_new_deaths').textContent = info.countries_stat[19]['new_deaths'];
        document.querySelector('.pt_new_cases').textContent = info.countries_stat[19]['new_cases'];
        document.querySelector('.pt_serious_critical').textContent = info.countries_stat[19]['serious_critical'];
        document.querySelector('.pt_active_cases').textContent = info.countries_stat[19]['active_cases'];
        document.querySelector('.pt_total_cases_per_1m_population').textContent = info.countries_stat[19]['total_cases_per_1m_population'];

        // document.querySelector('.quantity').textContent = info.countries_stat[1]['country_name'];
        // document.querySelector('.cases').textContent = info.countries_stat[1]['cases'];


    })