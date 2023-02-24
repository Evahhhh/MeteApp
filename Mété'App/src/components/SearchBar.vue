<script>

    var apiResult = null;

    export default {
        methods: {

            search() {

                var cityName = document.querySelector('#cityName').value;

                const apiKey = "ee07e2bf337034f905cde0bdedae3db8"

                console.log("Ville : ", cityName);

                
                let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + cityName + `&units=metric&appid=`+ apiKey + `&lang=fr`;
                var infos;

                
                fetch(apiUrl).then(function(response) {
                    if (response.ok) {
                        response.json().then(function(data) {

                            apiResult = data;
                            
                            console.log(data);
                            var date = new Date();
                            var current_date = date.toLocaleDateString();
                            
                            var data_J0 = weatherByDay(0);
                            var data_J1 = weatherByDay(1);
                            var data_J2 = weatherByDay(2);
                            var data_J3 = weatherByDay(3);
                            var data_J4 = weatherByDay(4);
                            var data_J5 = weatherByDay(5);


                            console.log("Aujourd'hui : " + data_J0.desc_comp + " - Température " + data_J0.temperature + "°C")
                            console.log("Demain : " + data_J1.desc_comp+ " - Température " + data_J1.temperature + "°C")
                            console.log("Après-demain : " + data_J2.desc_comp + " - Température " + data_J2.temperature + "°C")
                            console.log("Dans 3 jours : " + data_J3.desc_comp + " - Température " + data_J3.temperature + "°C")
                            console.log("Dans 4 jours : " + data_J4.desc_comp + " - Température " + data_J4.temperature + "°C")
                            console.log("Dans 5 jours : " + data_J5.desc_comp + " - Température " + data_J5.temperature + "°C")
                            
                        
                        });

                    }else {

                        alert('Error: ' + response.statusText);
                    
                    }

                })
            .
                    catch(function(error) {
                    alert('Unable to connect to OpenWeather');

                });

            return(infos);

            }

        }
        
    }

    export function weatherByDay(dayWanted){

        if(apiResult == null){
            console.log("SaerchBar : En attente de la sélection d'une ville")
        }else{
            const idWeather = apiResult.list[dayWanted].weather[0].id;
            const desc_comp = apiResult.list[dayWanted].weather[0].description;
            const temperature = apiResult.list[dayWanted].main.temp.toFixed(1);
            const temp_max = apiResult.list[dayWanted].main.temp_max.toFixed(1);
            const temp_min = apiResult.list[dayWanted].main.temp_min.toFixed(1);
            const temp_ressentie = apiResult.list[dayWanted].main.feels_like.toFixed(1);
            const humidity = apiResult.list[dayWanted].main.humidity;
            const pressure = apiResult.list[dayWanted].main.pressure;
            const wind = apiResult.list[dayWanted].wind.speed;
    
            var weather =   {
                idWeather: idWeather,
                desc_comp: desc_comp,
                temperature: temperature,
                temp_max: temp_max,
                temp_min: temp_min,
                temp_ressentie: temp_ressentie,
                humidity: humidity,
                pressure: pressure,
                wind: wind
            }

            return weather;
        }
    }  

</script>

<template>
    <div class="search-bar">
        <form class="searchBar">
            <label for="cityName">Choisissez une ville :</label>
            <input type="text" id="cityName" value="Paris" required>
            <button type="button" @click="search" class="search" id="search">Rechercher</button>
        </form>
    </div>
</template>

<style>

.searchBar{
    padding: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

label{
    color: black;
}

.searchBar input[type="text"]{
    border:none;
    border-radius : 10px;
    padding : 10px;
}

button{
    background-color : #CF8E80;
    color : white;
    padding : 10px 20px;
    border-radius : 10px;
    border : none;
    cursor:  pointer;
}


    
</style>