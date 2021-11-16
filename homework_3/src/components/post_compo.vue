<template>
    <div id= "comp-list-one">
        <ul>
            <li class="item" v-for = "post in postListsale" :key="post.id">

                <span class="picture">
                    <img :src="post.picture" style="width: 100%" >
                </span>

                <span class="name"> <h1>{{post.name}}</h1>  </span> <br>
                <span class="body"> {{post.body}} </span> <br>

                <span class="like">
                    <img src="../assets/like.png" style="width: 10%" >
                </span>

                <span class="dislike">
                    <img src="../assets/dislike.png" style="width: 10%" >
                </span>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
    name: "post_compo",
    data: function() {
    return {
    }}, computed: {

    //postList(){return this.$store.state.postList},
    postListsale() {return this.$store.getters.postListsale}}
    }
</script>


<style scoped>
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