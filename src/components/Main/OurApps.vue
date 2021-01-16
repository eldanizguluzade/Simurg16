<template>
  <section id="our-apps">
    <div class="ourapps-header">
      <h3 class="h4">Our Apps</h3>
      <p class="text-muted">download all apps for all platforms.</p>
      <span class="small-line"></span>
    </div>
    <div class="ourapps-body container">
      <ul id="apps-group" class="row">
        <li class="app col-6 col-md-4" v-for="app in apps" :key="app.id" data-aos="zoom-in-down" data-aos-duration="1000">
          <img :src="app.ico" class="img" :alt="app.name">
          <div class="app-body mt-2">
            <h5 class="app-name h6 mb-0">{{app.name}}</h5>
            <div class="app-rating">
              <small>
                <i class="fa fa-star color-gold" v-show="rating(app.rating,1)"></i>
                <i class="fa fa-star-half-alt color-gold" v-show="rating(app.rating,1.5)"></i>
                <i class="fa fa-star color-gold" v-show="rating(app.rating,2)"></i>
                <i class="fa fa-star-half-alt color-gold" v-show="rating(app.rating,2.5)"></i>
                <i class="fa fa-star color-gold" v-show="rating(app.rating,3)"></i>
                <i class="fa fa-star-half-alt color-gold" v-show="rating(app.rating,3.5)"></i>
                <i class="fa fa-star color-gold" v-show="rating(app.rating,4)"></i>
                <i class="fa fa-star-half-alt color-gold" v-show="rating(app.rating,4.5)"></i>
                <i class="fa fa-star color-gold" v-show="rating(app.rating,5)"></i>
              </small>
            </div>
            <p class="app-text text-muted my-2 mx-auto w-75">
              {{app.text}}
            </p>
          </div>
          <div class="app-footer mt-4">
            <ul class="platform">
                <li><i class="fa fa-android ico-android fa-2x" :class="app.platform.android"></i></li>
                 <li><i class="fa fa-apple ico-apple fa-2x" :class="app.platform.apple"></i></li>
                 <li><i class="fa fa-windows ico-windows fa-2x" :class="app.platform.windows"></i></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>



<script>
export default {
    data(){
        return{
            apps:[
                {
                    id:1,
                    ico:"/src/assets/img/apps-ico/img-app-2.png",
                    name:"Calendar App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:4.5,
                    platform:{
                        android:"active",
                        apple:"active",
                        windows:"active"
                    }
                },
                  {
                    id:2,
                    ico:"/src/assets/img/apps-ico/img-app-3.png",
                    name:"Camera App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:5,
                    platform:{
                        android:"deactive",
                        apple:"active",
                        windows:"active"
                    }
                },
                  {
                    id:3,
                    ico:"/src/assets/img/apps-ico/img-app-4.png",
                    name:"Mail App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:2.5,
                    platform:{
                        android:"active",
                        apple:"active",
                        windows:"deactive"
                    }
                },
                  {
                    id:4,
                    ico:"/src/assets/img/apps-ico/img-app-5.png",
                    name:"Note App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:4,
                    platform:{
                        android:"deactive",
                        apple:"active",
                        windows:"active"
                    }
                },
                  {
                    id:5,
                    ico:"/src/assets/img/apps-ico/img-app-6.png",
                    name:"Clock App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:3.5,
                    platform:{
                        android:"active",
                        apple:"active",
                        windows:"active"
                    }
                },
                  {
                    id:6,
                    ico:"/src/assets/img/apps-ico/img-app-7.png",
                    name:"Weather App",
                    text:`Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit`,
                    rating:5,
                    platform:{
                        android:"active",
                        apple:"deactive",
                        windows:"active"
                    }
                }
            ]
        }
    },
       methods:{
          rating(rating,value){
              if(!this.isFloat(value)){
                  return rating>=value ? true:false;  //2.5  >=  {1,1,5,2,2,5,3,3,5}
                 
              }
              else{
                  return rating===value ? true:false;  //2.5==2.5 true / false
              }
        },
        
      isFloat(n){
       return Number(n) === n && n % 1 !== 0;
       }  
    }
}
</script>