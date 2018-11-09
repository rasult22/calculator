<template>
    <div class="calc">
        <h2>Calculator 1.0</h2>
        <Result></Result>
        <Buttons></Buttons>
    </div>
</template>

<script>
    import Buttons from './Buttons';
    import Result from './Result';

    export default {
        components:{
            Buttons,
            Result
        }
    }
</script>

<style scoped>
    .calc{
        text-align: center;
        max-width: 280px;
        margin: 0 auto;
        border-radius: 5%;
        padding: 30px 5px;
        background-color: #fbeed7;
        box-shadow: -9px 17px 55px -15px #000000;
    }
    h2{
        color:#1d2323;
    }
</style>