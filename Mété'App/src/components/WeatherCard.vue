<template>
    <div class="card">
        <label class="day">
            {{ weather }}
        </label>
    </div>
</template>

<script >
    export default {
        props: {
            weather : Object
        }
    }
</script>

<style>
.card{
    background-color: white;
    border-radius: 20px;
    box-shadow : 5px 5px 18px 5px rgba(0,0,0,0.16);
    padding : 30px 20px 30px 20px;
}
</style>