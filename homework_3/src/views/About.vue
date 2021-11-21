<template>
  <div class="contact">
    <Header/>
    <h1>CONTACT US</h1>
    <div class="text">
        <b>KATI SÕER</b>
        <p>Email: soerkati@gmail.com</p>
        <p>Phone number: (+372) 55555555</p>
        <p></p>
        <b>KÄROLY RAUDSEPP</b>
        <p>Email: karolyraudsepp47@gmail.com</p>
        <p>Phone number: (+372) 66666666</p>
        <p></p>
        <b>HANNALIINA RAKOVITŠ</b>
        <p>Email: hannaliinarakovits@gmail.com</p>
        <p>Phone number: (+372) 77777777</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
  name: "Contact",
  components: {
    Header,
    Footer
  },
};
</script>



<style>
  .contact{
    background-image: url("../assets/proov1.jpg");
    margin: 0;
    } 
  
  .contact h1{
    text-align: center;
    font-size: 100px;
  }

  .contact p{
    text-align: center;
    font-size: 25px;
  }

  .contact b{
    text-align: left;
    font-size: 50px;
  }
</style>
