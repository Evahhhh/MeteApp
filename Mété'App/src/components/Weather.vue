<template>
  <div class="search-bar">
    <form class="searchBar" @submit.prevent="search">
      <label for="cityName">Choisissez une ville :</label>
      <input type="text" v-model="cityName" id="cityName" required>
      <button type="submit" class="search" id="search">Rechercher</button>
    </form>
  </div>

  <div class="page" v-if="!apiResult">
    <p class="empty-town-message">
      Veuillez sélectionner une ville
    </p>
  </div>
  <div class="page" v-if="apiResult">
    <div class="line1">
      <div class="col1">
        <WeatherCard :propWeather="weatherByDay(0)" />
      </div>
      <div class="col2">
        <WeatherCard :propWeather="weatherByDay(1)" />
      </div>
      <div class="col3">
        <WeatherCard :propWeather="weatherByDay(2)" />
      </div>
      <div class="col4">
        <WeatherCard :propWeather="weatherByDay(3)" />
      </div>
      <div class="col5">
        <WeatherCard :propWeather="weatherByDay(4)" />
      </div>
      <div class="col6">
        <WeatherCard :propWeather="weatherByDay(5)" />
      </div>
    </div>
  </div>
</template>
  
<script>
import WeatherCard from './../components/WeatherCard.vue';

export default {
  components: {
    WeatherCard,
  },
  data() {
    return {
      apiResult: null,
      cityName: "",
      apiKey: "ee07e2bf337034f905cde0bdedae3db8",
    }
  },
  methods: {
    findImgByIdWeather(id) {
      if (id.toString().charAt(0) == "2") {
        return "/src/assets/thunderstrom.png";
      } else if (id.toString().charAt(0) == "3") {
        return "/src/assets/drizzle.png";
      } else if (id.toString().charAt(0) == "5") {
        return "/src/assets/rain.png";
      } else if (id.toString().charAt(0) == "6") {
        return "/src/assets/snow.png";
      } else if (id.toString().charAt(0) == "7") {
        return "/src/assets/mist.png";
      } else if (id.toString() == "800") {
        return "/src/assets/clearSky.png";
      } else if (id.toString() == "801") {
        return "/src/assets/fewClouds.png";
      } else if (id.toString() == "802") {
        return "/src/assets/scatteredClouds.png";
      } else if (id.toString() == "803" || id.toString() == "804") {
        return "/src/assets/brokenClouds.png";
      } else {
        console.log("Icone non prévue");
      }
    },
    weatherByDay(dayWanted) {
      if (this.apiResult == null) {
        console.log("En attente de la sélection d'une ville");
      } else {
        const idWeather = this.apiResult.list[dayWanted].weather[0].id;
        const desc_comp = this.apiResult.list[dayWanted].weather[0].description;
        const temperature = this.apiResult.list[dayWanted].main.temp.toFixed(1);
        const temp_max = this.apiResult.list[dayWanted].main.temp_max.toFixed(1);
        const temp_min = this.apiResult.list[dayWanted].main.temp_min.toFixed(1);
        const temp_ressentie = this.apiResult.list[dayWanted].main.feels_like.toFixed(1);
        const humidity = this.apiResult.list[dayWanted].main.humidity;
        const pressure = this.apiResult.list[dayWanted].main.pressure;
        const wind = this.apiResult.list[dayWanted].wind.speed;

        var day = null;
        const date = new Date();
        const options = { weekday: "long" };

        switch(dayWanted){
          case 0 :
            day = "Aujourd'hui"
            break;
          case 1 :
            day = "Demain"
            break;
          case 2 : 
            date.setDate(date.getDate() + 2);
            const currentPlus2 = date.toLocaleDateString("fr-FR", options);
            day = currentPlus2
            break;
          case 3 : 
            date.setDate(date.getDate() + 3);
            const currentPlus3 = date.toLocaleDateString("fr-FR", options);
            day = currentPlus3
            break;;
          case 4 : 
            date.setDate(date.getDate() + 4);
            const currentPlus4 = date.toLocaleDateString("fr-FR", options);
            day = currentPlus4
            break;
          case 5 : 
            date.setDate(date.getDate() + 5);
            const currentPlus5 = date.toLocaleDateString("fr-FR", options);
            day = currentPlus5
            break;
        }

        var icon = this.findImgByIdWeather(idWeather);

        var weather = {
          icon : icon,
          day : day,
          idWeather: idWeather,
          desc_comp: desc_comp,
          temperature: temperature,
          temp_max: temp_max,
          temp_min: temp_min,
          temp_ressentie: temp_ressentie,
          humidity: humidity,
          pressure: pressure,
          wind: wind,
        };

        return weather;
      }
    },
    search() {
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&appid=${this.apiKey}&lang=fr`;

      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              this.apiResult = data;
            });
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .catch((error) => {
          alert("Unable to connect to OpenWeather");
        });
    },
  }
};
</script>
  
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col1 {
  grid-area: 1 / 1 / 2 / 2;
}

.col2 {
  grid-area: 1 / 2 / 2 / 3;
}

.col3 {
  grid-area: 1 / 3 / 2 / 4;
}

.col4 {
  grid-area: 1 / 4 / 2 / 5;
}

.col5 {
  grid-area: 1 / 5 / 2 / 6;
}

.col6 {
  grid-area: 1 / 6 / 2 / 7;
}

.searchBar {
  padding: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
}

label {
  color: black;
}

.searchBar input[type="text"] {
  border: none;
  border-radius: 10px;
  padding: 10px;
}

button {
  background-color: #cf8e80;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.empty-town-message {
  color: black;
}
</style>
  