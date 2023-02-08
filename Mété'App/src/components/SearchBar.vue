<script>
    export default {
        methods: {
            search() {

                const apiKey = "ee07e2bf337034f905cde0bdedae3db8"
                let cityName = document.querySelector('#SearchBar').value;
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=fr`;
                var infos;

                fetch(apiUrl).then(function(response) {
                    if (response.ok) {
                        response.json().then(function(data) {
                            let date = new Date();
                            current_date = date.toLocaleDateString();
                            
                            infos = {

                                city : data.name,
                                date : current_date,
                                weather : weatherName(data.weather[0].main),
                                temp : data.main.temp,
                                tempFeelsLike : data.main.feels_like,
                                tempMin : data.main.temp_min,
                                tempMax : data.main.temp_max,
                                humidity : data.main.humidity,
                                windSpeed : data.wind.speed

                            }
                        
                        });

                    }else {

                        alert('Error: ' + response.statusText);
                    
                    }

                })
            .
                    catch(function(error) {
                    alert('Unable to connect to OpenWeather');

                });

            module.exports(infos);

        },
    
    },
}


</script>

<template>
    <div class="search-bar">
        <form class="SearchBar">
            <input type="text" placeholder="Search" />
            <button type="button" @click="search">Search</button>
        </form>
    </div>
</template>

<style>
    
</style>