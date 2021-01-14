<template>
  <section id="our-team">
    <div class="team-header container">
      <h3 class="h4">Our Amazing Team</h3>
      <p class="text-muted">we work hard everyday.</p>
      <span class="small-line"></span>
    </div>
    <div class="team-body">
      <div class="team-group container">
        <ul class="team-list row">
          <li class="card-item mb-4" v-for="profile in team_profiles" :key="profile.id">
            <div class="header-card text-center">
              <h5 class="h6 card-title">{{profile.fullname}}</h5>
              <small>{{profile.mission}}</small>
            </div>
            <div class="body-card my-3">
              <img :src="profile.photo" class="img rounded-circle" :alt="profile.fullname">
            </div>
            <div class="footer-card">
              <ul class="social-group">
                <li><a :href="profile.social.twitter" target="_blank" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a :href="profile.social.facebook" target="_blank" class="fa fa-facebook" aria-hidden="true"></a>
                </li>
                <li><a :href="profile.social.linkedin" target="_blank" class="fa fa-linkedin" aria-hidden="true"></a>
                </li>
                <li><a :href="profile.social.github" target="_blank" class="fa fa-github" aria-hidden="true"></a></li>
                <li><a :href="profile.social.pinterest" target="_blank" class="fa fa-pinterest" aria-hidden="true"></a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="team-footer">
        <span class="text h4 mx-3">We're Hiring</span>
        <a class="btn">Submit Apply</a>    
    </div>
  </section>
</template>



<script>
  export default {
    data() {
      return {
        team_profiles: [{
            id: 1,
            fullname: "Eldaniz Guluzade",
            mission: "Front-end Developer",
            photo: "/src/assets/img/team-imgs/Eldaniz_Guluzade.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
          {
            id: 2,
            fullname: "Michael Doe",
            mission: "Co-Founder & CEO",
            photo: "/src/assets/img/team-imgs/2.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
            {
            id: 3,
            fullname: "John Doe",
            mission: "Web Designer",
            photo: "/src/assets/img/team-imgs/3.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
            {
            id: 4,
            fullname: "Harry Doe",
            mission: "App Designer",
            photo: "/src/assets/img/team-imgs/4.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
           {
            id: 5,
            fullname: "Terry Doe",
            mission: "Web Developer",
            photo: "/src/assets/img/team-imgs/5.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
             {
            id: 6,
            fullname: "Michael Doe",
            mission: "Back-end Developer",
            photo: "/src/assets/img/team-imgs/6.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
             {
            id: 7,
            fullname: "Harry Doe",
            mission: "Co-Founder",
            photo: "/src/assets/img/team-imgs/8.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
             {
            id: 8,
            fullname: "Terry Doe",
            mission: "App Developer",
            photo: "/src/assets/img/team-imgs/9.jpg",
            social: {
              twitter: '#',
              facebook: '#',
              linkedin: '#',
              github: '#',
              pinterest: '#'
            }
          },
        ],
      }
    },
  }

</script>
