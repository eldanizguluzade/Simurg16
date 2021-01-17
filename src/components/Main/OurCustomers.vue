<template>
  <section id="our-customers">
    <div class="container text-center">
      <carousel :autoplay="true" :perPageCustom="[,[330, 1],[768, 1], [1024, 3]]">
        <slide v-for="customer in thoughts" :key="customer.id">
          <img :src="customer.image" class="img rounded-circle" alt="Profile Images">
          <div class="customers-body my-3">
              <p class="w-75 mx-auto">{{customer.text}}</p>
          </div>
           <div class="customers-footer">
                <i class="fa fa-quote-left"></i>
                <span>{{customer.name}}</span>
               <a :href="customer.url" class="mx-2">{{customer.website}}</a>
           </div>
        </slide>  
      </carousel>
    </div>
  </section>
</template>



<script>
export default {
    data(){
        return{
            thoughts:[
                {
                    id:1,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-1.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                },
                 {
                    id:2,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-2.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                },
                 {
                    id:3,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-3.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                },
                 {
                    id:4,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-4.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                },
                 {
                    id:5,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-3.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                },
                 {
                    id:6,
                    name:"Martin Smith",
                    image:"/src/assets/img/profile-imgs/photo-2.jpg",
                    text:`Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio. `,
                    website:"Smashingmagazine.com",
                    url:"#"
                }
            ]
        }
    }
}
</script>