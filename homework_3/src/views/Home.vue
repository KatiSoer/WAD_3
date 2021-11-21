<template>
  <div class="home">
    <Header/>
    <h4>WELCOME TO CAT TINDER</h4>
    <img src="../assets/mask.jpg" alt=""
      height="700px"
      width="700px"
        >
    <h2></h2>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
  .home h4{
    text-align: center;
    font-size: 50px;
  }
  .home{
    background-image: url("../assets/proov1.jpg");
    } 
</style>
