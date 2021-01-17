<template>
  <section id="company-rating">
    <div class="company-header container">
      <h3 class="h4">Our Apps Have Been Downloaded in Around the world</h3>
      <p class="text-muted">lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.</p>
    </div>
    <div class="company-body container-fluid">
      <div class="our-ratings row">
        <div class="col-6" >
          <div>
            <span class="color-success" data-aos="zoom-in" data-aos-duration="2000"> {{OurRatings.installs}}</span>
            <p>Installs</p>
          </div>
          <div>
            <span class="color-blue" data-aos="zoom-in" data-aos-duration="2000"> {{OurRatings.happyClients}}</span>
            <p>Happy Clients</p>
          </div>
        </div>
        <div class="col-6">
          <div>
            <span class="color-cyan" data-aos="zoom-in" data-aos-duration="2000"> {{OurRatings.coffeeCups}}</span>
            <p>Coffee Cups</p>
          </div>
          <div>
            <span class="color-yellow" data-aos="zoom-in" data-aos-duration="2000"> {{OurRatings.reviews}}</span>
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
