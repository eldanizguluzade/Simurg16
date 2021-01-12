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
        </main>
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
export default {
  name: 'app',
  components:{
     "repair-page":Repair,
     "headernav-app":HeaderNav,
     "hslider-app":HeaderSlider,
     "sponsors":Sponsors,
     "welcome":Welcome,
     "our-statistics":Statistics,
     "buy-product":BuyProduct,
     "company-rating":CompanyRating,
     "app-features":ProductFeatures
  },
  data () {
    return {
      isRepair:false,
    }
  }
}
</script>

<style lang="css">
  @import url('./assets/css/main.css');
</style>