<template>
  <section id="app-photo">
    <div class="photo-header container">
      <h3 class="h4">App Screenshots</h3>
      <p class="text-muted">download all apps for all platforms.</p>
      <span class="small-line"></span>
    </div>
    <div class="photo-body">
      <div class="photo-group container">
        <carousel :autoplay="true" :perPageCustom="[[768, 5], [1024, 4]]">
          <slide>
           <img src="/src/assets/img/app-screenshot/img-app-9.jpg" class="img" alt="App Photo Slider">
          </slide>
          <slide>
           <img src="/src/assets/img/app-screenshot/img-app-10.jpg" class="img" alt="App Photo Slider">
          </slide>
            <slide>
           <img src="/src/assets/img/app-screenshot/img-app-11.jpg" class="img" alt="App Photo Slider">
          </slide>
            <slide>
           <img src="/src/assets/img/app-screenshot/img-app-12.jpg" class="img" alt="App Photo Slider">
          </slide>
            <slide>
           <img src="/src/assets/img/app-screenshot/img-app-13.jpg" class="img"  alt="App Photo Slider">
          </slide>
            <slide>
           <img src="/src/assets/img/app-screenshot/img-app-14.jpg" class="img" alt="App Photo Slider">
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
