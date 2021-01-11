<template>
  <section id="company-rating">
    <div class="company-header container">
      <h3 class="h4">Our Apps Have Been Downloaded in Around the world</h3>
      <p class="text-muted">lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.</p>
    </div>
    <div class="company-body container-fluid">
      <div class="our-ratings row">
        <div class="col-6">
          <div>
           <number ref="number1" 
              class="color-success"
              :from="0" 
              :to="OurRatings.installs" 
              :duration="7" 
              :delay="4"
                easing="Power1.easeOut" />
            <p>Installs</p>
          </div>
          <div>
              <number ref="number1" 
               class="color-blue"
              :from="0" 
              :to="OurRatings.happyClients" 
              :duration="7" 
              :delay="4"
                easing="Power1.easeOut" />
            <p>Happy Clients</p>
          </div>
        </div>
        <div class="col-6">
          <div>
             <number ref="number1" 
              class="color-cyan"
              :from="0" 
              :to="OurRatings.coffeeCups" 
              :duration="7" 
              :delay="4"
                easing="Power1.easeOut" />
            <p>Coffee Cups</p>
          </div>
          <div>
            <number ref="number1" 
              class="color-yellow"
              :from="0" 
              :to="OurRatings.reviews" 
              :duration="7" 
              :delay="4"
                easing="Power1.easeOut" />
            <p>Reviews</p>
          </div>
        </div>
        <div class="map col-12">
          <img src="/src/assets/img/map.png" class="img" alt="Map">
        </div>
      </div>
    </div>
    <div class="company-footer">
      <div class="row">
        <h4 class="h5">Have an idea?</h4>
        <p class="small w-75">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </div>
      <a class="btn">Start Project</a>
    </div>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        OurRatings: {
          installs: 765,
          happyClients: 364,
          coffeeCups: 254,
          reviews: 673,
        }
      }
    }

  }

</script>
