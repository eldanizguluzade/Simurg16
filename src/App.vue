<template>
  <div id="app">
    <repair-page v-if="isRepair"></repair-page>
    <div v-if="!isRepair">
      <header>
        <headernav-app></headernav-app>
        <hslider-app></hslider-app>
        <sponsors></sponsors>
      </header>
      <main>
        <welcome></welcome>
        <our-statistics></our-statistics>
        <buy-product></buy-product>
        <company-rating></company-rating>
        <app-features></app-features>
        <app-photo></app-photo>
        <our-team></our-team>
        <question-answer></question-answer>
        <our-blog></our-blog>
        <join-our></join-our>
        <our-apps></our-apps>
        <our-customers></our-customers>
      </main>
      <footer>
        <footer-block></footer-block>
      </footer>
    </div>
  </div>
</template>

<script>
  import Repair from './Repair'
  import HeaderNav from './components/Header/Nav'
  import HeaderSlider from './components/Header/Slider'
  import Sponsors from './components/Header/Sponsors'
  import Welcome from './components/Main/Welcome'
  import Statistics from './components/Main/Statistics'
  import BuyProduct from './components/Main/BuyProduct'
  import CompanyRating from './components/Main/CompanyRating'
  import ProductFeatures from './components/Main/ProductFeatures'
  import AppPhoto from './components/Main/AppPhoto'
  import OurTeam from './components/Main/OurTeam'
  import Question from './components/Main/QuestionAnswer'
  import OurBlog from './components/Main/OurBlog'
  import JoinOur from './components/Main/JoinOur'
  import OurApps from './components/Main/OurApps'
  import OurCustomers from './components/Main/OurCustomers'
  import Footer from './components/Footer/Footer'
  export default {
    name: 'app',
    components: {
      "repair-page": Repair,
      "headernav-app": HeaderNav,
      "hslider-app": HeaderSlider,
      "sponsors": Sponsors,
      "welcome": Welcome,
      "our-statistics": Statistics,
      "buy-product": BuyProduct,
      "company-rating": CompanyRating,
      "app-features": ProductFeatures,
      "app-photo": AppPhoto,
      "our-team": OurTeam,
      "question-answer": Question,
      "our-blog": OurBlog,
      "join-our": JoinOur,
      "our-apps": OurApps,
      "our-customers":OurCustomers,
      "footer-block":Footer
    },
    data() {
      return {
        isRepair: false,
      }
    },
  }
</script>

<style lang="css">
  @import url('./assets/css/main.css');

</style>
