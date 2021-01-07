<template>
    <div id="app">
          <repair-page v-if="isRepair"></repair-page>
        <div v-if="!isRepair">
        <header>
         <headernav-app></headernav-app>
         <hslider-app></hslider-app>
         <sponsors></sponsors>
        </header>
        <main></main>
      </div>
   </div>
</template>

<script>
import Repair from './Repair'
import HeaderNav from './components/Header/Nav'
import HeaderSlider from './components/Header/Slider'
import Sponsors from './components/Header/Sponsors'
export default {
  name: 'app',
  components:{
     "repair-page":Repair,
     "headernav-app":HeaderNav,
     "hslider-app":HeaderSlider,
     "sponsors":Sponsors
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