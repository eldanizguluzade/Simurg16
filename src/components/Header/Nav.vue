<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-lg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <h1 class="h2">SIMURG-16</h1>
      </a>
      <button class="btn btn-outline-danger d-lg-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="page in pages" :key="page.id">
            <a class="nav-link active" aria-current="page" :href="page.url" v-html="page.name"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
  export default {
    data() {
      return {
        pages: [{
            id: 0,
            name: "HOME",
            url: "#"
          },
          {
            id: 1,
            name: "PAGE",
            url: "#"
          },
          {
            id: 2,
            name: "SHORTCODE",
            url: "#"
          },
          {
            id: 3,
            name: "PORTFOLIO",
            url: "#"
          },
          {
            id: 4,
            name: "BLOG",
            url: "#"
          },
          {
            id: 5,
            name: "SHOP",
            url: "#"
          },
          {
            id: 6,
            name: "<i class='fa fa-search' aria-hidden='true'></i>",
            url: "#"
          }
        ]
      }
    }
  }

</script>
