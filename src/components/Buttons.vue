<template>
    <div class="cButton">
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)" >1</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">2</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">3</button>
        <button class="btn btn-warning"
                @click="handleOperator($event.target.innerHTML)">/</button>
        <br>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">4</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">5</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">6</button>
        <button class="btn btn-warning"
                @click="handleOperator($event.target.innerHTML)">*</button>
        <br>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">7</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">8</button>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">9</button>
        <button class="btn btn-warning"
                @click="handleOperator($event.target.innerHTML)">-</button>
        <br>
        <button class="btn" 
                @click="handleNumber($event.target.innerHTML)">0</button>
        <button class="btn">.</button>
        <button class="btn btn-success" 
                @click="calc">=</button>
        <button class="btn btn-warning"
                @click="handleOperator($event.target.innerHTML)">+</button>
        <button class="btn btn-danger" @click="clear()">Clear</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        data(){
            return{

            }
        },
        methods:{
            ...mapMutations(
                ['handleNumber', 'clear', 'handleOperator', 'calc']
            ),
            
           
        }
    }
</script>

<style scoped>
    .btn{
        width: 46px;
        margin-top: 5px;
        background-color: #665c84;
        color:#fff;
    }
    .btn-danger{
        width: 98%;
        background-color: #ff7657;
        border-color: #ff7657;
        color: #fff;
    }
    .btn-warning{
        background-color: #ffba5a;
        color: #1d2323;
    }
    .cButton{
        margin: 0 auto;
        width:200px;
        text-align: center;
    }
</style>