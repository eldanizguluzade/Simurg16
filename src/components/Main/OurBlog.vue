<template>
  <section id="our-blog">
    <div class="container">
      <div class="blog-header">
        <h3 class="h4">Latest From Our Blog</h3>
        <p class="text-muted">lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.</p>
        <span class="small-line"></span>
      </div>
      <div class="blog-body">
        <ul class="blog-items row">
          <li class="card col-10 col-md-5 col-lg-4 col-xl-3" v-for="blog in blogs" :key="blog.id" data-aos="zoom-in-down">
            <div class="card-header row">
              <div class="share-info col-7">
                <img :src="blog.author.image" class="img rounded-circle" alt="Profile Images">
                <span>{{blog.author.name}}</span>
              </div>
              <span class="share-times col-5">{{blog.times}}</span>
            </div>
            <div class="card-body container">
              <div class="card-images">
                <img :src="blog.image" class="img card-img-top rounded-0" :alt="blog.title">
              </div>
             <h5 class="card-title h6"><a :href="blog.url">{{blog.title}}</a></h5>
              <p class="card-text text-muted">{{blog.text}}</p>
            </div>
            <div class="card-footer row">
              <a :href="blog.url" class="col-3">Read More</a>
              <div class="more-items col offset-1">
                <span><i class="fas fa-heart"></i>{{blog.more.likes}} Like</span>
                <span><i class="fas fa-comments"></i>{{blog.more.comments}} Comments</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data() {
      return {
        blogs: [
            {
          id:1,
          title: "Amazing Blog Post One",
          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
          image:"src/assets/img/uploads/blog/img-blog-2.jpg",
          url: "#",
          times:"PEB. 14 2020",
           author: {
            name: "Harry Boo",
            image: "src/assets/img/profile-imgs/photo-1.jpg"
          },
          more: {
            likes: 59,
            comments: 120
          }
        },
          {
          id:2,
          title: "Amazing Blog Post One",
          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
          image:"src/assets/img/uploads/blog/img-blog-3.jpg",
          url: "#",
          times:"PEB. 14 2020",
           author: {
            name: "Harry Boo",
            image: "src/assets/img/profile-imgs/photo-4.jpg"
          },
          more: {
            likes: 72,
            comments: 220
          }
        },
          {
          id:3,
          title: "Amazing Blog Post One",
          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
          image:"src/assets/img/uploads/blog/img-blog-4.jpg",
          url: "#",
          times:"PEB. 14 2020",
           author: {
            name: "Harry Boo",
            image: "src/assets/img/profile-imgs/photo-3.jpg"
          },
          more: {
            likes: 29,
            comments: 251
          }
        },
        ]
      }
    }
  }

</script>
