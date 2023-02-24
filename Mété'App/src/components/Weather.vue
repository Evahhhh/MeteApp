<template>
    <div class="page">

        <div class="line1">
            <div class = "col1">
                <WeatherCard :weather="weatherByDay(0)"/>
            </div>
            <div class = "col2">
                <WeatherCard :weather="weatherByDay(1)" />
            </div>
            <div class = "col3">
                <WeatherCard :weather="weatherByDay(2)" />
            </div>
        </div>

        <div class="line2">
            <div class = "col4">
                <WeatherCard :weather="weatherByDay(3)" />
            </div>
            <div class = "col5">
                <WeatherCard :weather="weatherByDay(4)" />
            </div>
            <div class = "col6">
                <WeatherCard :weather="weatherByDay(5)" />
            </div>
        </div>

    </div>

</template>

<script setup>
import WeatherCard from "./WeatherCard.vue";
import { weatherByDay } from "./SearchBar.vue";
</script>

<style>
.line1{
    display: flex;
    justify-content: space-between;
    color : black;
    padding : 40px 60px 20px 60px;
}

.line2{
    display: flex;
    justify-content: space-between;
    color : black;
    padding : 20px 60px 40px 60px;
}


</style>