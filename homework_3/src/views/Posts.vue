<template>
    <div class="posts">
        <button v-on:click="reset()">RESET LIKES</button>
        <h2> Welcome to catTinder!</h2>
        <div id="comp-list-one">
        <ul>
            <Post v-for="post in postListsale" 
            :key="post.id"
            :id="post.id" />
        </ul>
        </div>
    </div>
</template>


<script>
    import Post from "@/components/Post.vue";

    export default {
        name: "Posts",
        components: { 
            Post
        },
        computed: {
            postListsale() {
                return this.$store.getters.postListsale;
            }
        },
        methods: {
            reset() {
                this.$store.commit("resetLikes");
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>
.posts{
    background-image: url("../assets/proov1.jpg");
    margin: 0;
    } 
 .item{
 background: rgb(47, 255, 141);
 margin-bottom: 5px;
 padding: 3px 5px;
}
#comp-list-one{
	background-color: white;
	margin-left: auto;
	flex-direction: column;
	display: flex;
	margin-right: auto;
	width: 40%;
	margin-top: 0;
}
#comp-list-one ul{
 background-color: whitesmoke;
 margin-left: auto;
 margin-right: auto;
 align-content: left;
 margin-top: 70px; 
 width: 60%;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
}

#comp-list-one li{
 display: inline-block;
 margin-right: 10px;
 margin-top: 10px;
 text-align: left;
 padding: 1px 16px;
 background: rgba(255,255,255,0.7);

}

#comp-list-one li:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

div img {
	cursor: pointer;
}
</style>