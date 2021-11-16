<template>
    <div class="posts">
        <h2> Welcome to catTinder!</h2>
        <post_compo> </post_compo>
    </div>
</template>


<script>
    import post_compo from "@/components/post_compo.vue";
    export default {
        name: "Posts",
        components: { post_compo },
        data(){
        return{
        }}}
</script>


<style scoped>
.posts{
    background-image: url("../assets/proov1.jpg");
    margin: 0;
    } 
</style>