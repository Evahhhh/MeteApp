<template>
    <app-accordion class="accordion">
        <template v-slot:title>
            <div class="card-header">
                <div class="left-header">
                    <img v-bind:src="propWeather.icon" />
                    <h2 class="card-title">{{ propWeather ? capitalized(propWeather.day) : '' }}</h2>
                </div>
                <h2 class="card-title">{{ propWeather ? capitalized(propWeather.desc_comp) : '' }}</h2>
                <p class="card-subtitle">{{ propWeather ? propWeather.temperature : '' }}°C</p>
            </div>
        </template>
        <template v-slot:content>
            <div class="card-body">
                <p>Température Maximale : {{ propWeather ? propWeather.temp_max : '' }}°C</p>
                <p>Température Minimale : {{ propWeather ? propWeather.temp_min : '' }}°C</p>
                <p>Température Ressentie : {{ propWeather ? propWeather.temp_ressentie : '' }}°C</p>
                <p>Humidité : {{ propWeather ? propWeather.humidity : '' }}%</p>
                <p>Pression : {{ propWeather ? propWeather.pressure : '' }}hPa</p>
                <p>Vent : {{ propWeather ? propWeather.wind : '' }}km/h</p>
            </div>
        </template>
    </app-accordion>
</template>
<script>
import AppAccordion from "./Accordion.vue"
export default {
    name: 'WeatherCard',
    props: {
        propWeather: {
            type: Object,
            required: true
        }
    },
    components: {
        AppAccordion
    },
    methods: {
        capitalized(value) {
            return value[0].toUpperCase() + value.slice(1);
        }
    }
}
</script>
<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left-header{
    display : flex;
    align-items: center;
    gap : 10px;
    width: 200px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
}

.card-subtitle {
    font-size: 1.2rem;
    margin: 0;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding :20px;
}

img{
    height : 60px;
}

@media (max-width: 600px) {
  .card-title {
    font-size: 1.2rem;
  }
  img{
    height : 40px;
  }
}

</style>