<template>
    <li>
                <span class="picture">
                    <img :src="post.picture" style="width: 100%" >
                </span>

                <span class="name"> <h1>{{post.name}}</h1>  </span> <br>
                <span class="body"> {{post.body}} </span> <br>
                <br>
                <span class="like">
                    <img src="../assets/heart.png" v-on:click="incrementCounter()" style="width: 10%" >
                    <p>{{post.likes}}</p>
                </span>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 1
        }
    },
    data() {
       return {
           count: 0
       }
    },
    methods: {
       incrementCounter() {
            this.post.likes += 1;
        },
   },
   computed: {
       post() {
           return this.$store.getters.getPost(this.id);
       }
   }

}
</script>

<style scoped>

</style>