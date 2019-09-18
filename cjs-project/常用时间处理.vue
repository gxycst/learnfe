<template>
    
</template>

<script>
    export default {
        name: "常用时间处理.vue",
        mounted(){
            //6天前的0.0.0
            new Data(new Date().setHours(0,0,0)-24*3600*1000*6);
        }
    }
</script>

<style scoped>

</style>