<template>
  <section id="hslider" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="slideCap in sliders" :key="slideCap.id" data-bs-target="#hslider"
        :data-bs-slide-to="slideCap.id" :class="sliderActive(slideCap.isActive)"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item" v-for="slide in sliders" :key="slide.id" :class="sliderActive(slide.isActive)">
        <img :src="slide.img" class="d-block" :alt="slide.alt">
        <transition
        appear
        :enter-active-class="'animated '+ slide.InEffect"
        :leave-active-class="'animated '+ slide.OutEffect"
        v-if="sliderEffect">
         <div class="carousel-caption d-block">
          <h5>{{slide.title}}</h5>
          <p>{{slide.caption}}</p>
          <button class="btn btn-danger">Start Project</button>
        </div>
        </transition>
      </div>
    </div>
    <a class="carousel-control-prev" href="#hslider" role="button" data-bs-slide="prev" @click="sliderEffect=false">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#hslider" role="button" data-bs-slide="next"  @click="sliderEffect=false">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </section>
</template>


<script>
  export default {
    data() {
      return {
        sliderEffect:true,
        sliders: [{
            id: 0,
            title: "Welcome To Simurg16 Development",
            caption: "Wordpress. Joomla. eCommerce. HTML. Etc.",
            img: "/src/assets/img/slide-imgs/banner-1.jpg",
            alt: "",
            isActive: true,
            InEffect:"bounceInDown",
            OutEffect:"bounceOutRight"
          },
          {
            id: 1,
            title: "Second slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "/src/assets/img/slide-imgs/banner-2.jpg",
            alt: "",
            isActive: false,
            InEffect:"rotateInUpRight",
            OutEffect:"rotateOutDownLeft"
          },
          {
            id: 2,
            title: "Three slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img: "/src/assets/img/slide-imgs/banner-3.jpg",
            alt: "",
            isActive: false,
            InEffect:"rollIn",
            OutEffect:"bounceInLeft"
          }
        ]
      }
    },
    methods: {
      sliderActive(item) {
        return item==true? 'active':null;
      }
    },
    watch:{
      sliderEffect(){
        setTimeout(() => {
          this.sliderEffect=true;
        }, 800);
      }
    }
  }
</script>
