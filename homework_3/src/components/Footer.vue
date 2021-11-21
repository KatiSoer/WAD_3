<template>
    <div class="foo">
        <router-link to="/contact">CONTACT US</router-link>
    </div>
</template>
<script>
    export default {
        name:'Footer'
    }
</script>

<style>
    .foo a{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        padding: 16px 30px;
        text-decoration: none;
    }
</style>