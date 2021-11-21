<template>
    <div class="hea">
        <router-link to="/">HOME</router-link> |
        <router-link :to="{ name: 'posts' }">POSTS</router-link> |
        <router-link to="/contact">CONTACT US</router-link>
    </div>
</template>
<script>
    export default {
        name:'Header'
    }
</script>

<style>
    .hea a{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        padding: 16px 30px;
        text-decoration: none;
    }
    .hea a:hover{
        background:#FCE3E7;
    }
</style>