<template>
  <section id="question-answer" class="mix-violet row">
    <h3 class="h4">Your Questions. Our Answers.</h3>
    <p>frequently asked questions. <a href="#" class="text-dark">see all faqs.</a></p>
    <div class="accordion accordion-flush col-10 col-md-7 col-xl-5" id="accordionQuestion">
      <div class="accordion-item" v-for="question in questionAnswer" :key="question.id">
        <h2 class="accordion-header" :id="'flush-heading'+question.id">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse'+question.id" aria-expanded="false" aria-controls="flush-collaps">
            {{question.question}}
          </button>
        </h2>
        <div :id="'flush-collapse'+question.id" class="accordion-collapse collapse" aria-labelledby="flush-heading"
          data-bs-parent="#accordionQuestion">
          <div class="accordion-body">{{question.answer}}</div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
    data(){
        return{
            questionAnswer:[
                {
                id:1,
                question:"Question Item #1",
                answer:`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                        nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica`
                },
                 {
                id:2,
                question:"Question Item #2",
                answer:`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                        nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica`
                },
                 {
                id:3,
                question:"Question Item #3",
                answer:`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                        nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica`
                },
                 {
                id:4,
                question:"Question Item #4",
                answer:`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                        nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica`
                }
            ]
        }
    }
}
</script>