<template>
    <div class="res">
        <input type="text" class="form-control" :value="getCurrentNumber" disabled>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return {}
        },
        computed:{
            ...mapGetters(['getCurrentNumber']),
            
        }
    }
</script>

<style scoped>
    .res{
        margin: 0 auto;
        width:200px;
        text-align: center;
    }
    .form-control:disabled{
        background-color: white;
        color: black;
    }
</style>