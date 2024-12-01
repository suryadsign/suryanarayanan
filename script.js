

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 3000)
})

gsap.ticker.lagSmoothing(0)


function smoothScroll(){
  document.querySelector('#works').scrollIntoView({
      behavior: 'smooth'
  });
}

function InteractionScroll(){
document.querySelector('#interactives').scrollIntoView({
    behavior: 'smooth'
});
}




let mm = gsap.matchMedia();

mm.add("(max-width: 767px)", () => {
  gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.desig')

splitTypes.forEach((char,i) => {
  const text = new SplitType (char, { types: 'chars,words'})

  gsap.from(text.chars, {
    scrollTrigger : {
      trigger:char,
      start:'top 100%',
      end:'top 20%',
      scrub:false,
      markers:false,     
    },
    y:2,
    opacity:0,
    repeat:0,
    color:'#0ca8c4',
    duration:0.6,
    stagger:0.1
  })
})



gsap.to('.feedbacks', {
  scrollTrigger : {
    trigger:'.feedbacks',
    start:'top 50%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },
  opacity:0,
  y:100

})

gsap.to('.head1d', {
  opacity:1,
  y:0,
  scrollTrigger : {
    trigger:'.hero_column',
    start:'top 50%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },

})


gsap.to('.heading-title', {
  opacity:0.6,
  y:200,
  scrollTrigger : {
    trigger:'.heading-title',
    top:'top 100%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },

})

  gsap.from('.hero_row', {
    y:100,
    opacity:0,
    scrollTrigger : {
      trigger:'.hero_row',
      start:'top 100%',
      end:'bottom 10%',
      scrub:true,
      markers:false,     
    },

  })

  gsap.from('.box_row2', {
    y:0,
    opacity:1,
    scrollTrigger : {
      trigger:'.box_row2',
      start:'top 80%',
      end:'bottom 20%',
      scrub:true,
      markers:false,     
    }

  })

  gsap.from('.hero_column', {
    y:100,
    opacity:0,
    scale:1,
    duration:2,
    scrollTrigger : {
      trigger:'.hero_column',
      start:'top 90%',
      end:'top 20%',
      scrub:true,
      markers:false,     
    }

  })


gsap.from('.rollerimage',{
  x:500,
  opacity:1,
  scrollTrigger: {
    trigger:'.rollerimage',
    start:'top 80%',
    end:'bottom 20%',
    scrub:true,
    markers:false,
  }
})

gsap.from('.product-img-rotate',{
  y:200,
  opacity:1,
  scrollTrigger: {
    trigger:'.product-img-rotate',
    start:'top 80%',
    end:'top 20%',
    scrub:true,
    markers:false,
  }
})


});

mm.add("(min-width: 768px)", () => {
  gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.desig')

splitTypes.forEach((char,i) => {
  const text = new SplitType (char, { types: 'chars,words'})

  gsap.from(text.chars, {
    scrollTrigger : {
      trigger:char,
      start:'top 100%',
      end:'top 20%',
      scrub:false,
      markers:false,     
    },
    y:2,
    opacity:0,
    repeat:0,
    color:'#0ca8c4',
    duration:0.6,
    stagger:0.1
  })
})

gsap.to('.feedbacks', {
  scrollTrigger : {
    trigger:'.feedbacks',
    start:'top 50%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },
  opacity:0,
  y:100

})

gsap.to('.head1d', {
  opacity:1,
  y:500,
  scrollTrigger : {
    trigger:'.hero_column',
    start:'top 70%',
    end:'bottom 10%',
    scrub:true,
    markers:false,     
  },

})


gsap.to('.heading-title', {
  opacity:0,
  y:200,
  scale:1,
  scrollTrigger : {
    trigger:'.heading-title',
    start:'top 50%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },

})

gsap.from('.name', {
  opacity:1,
  scale:1,
  scrollTrigger : {
    trigger:'.name',
    start:'top 50%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },

})

  gsap.from('.box_row2', {
    y:50,
    opacity:0,
    scrollTrigger : {
      trigger:'.box_row2',
      start:'top 80%',
      end:'top 20%',
      scrub:false,
      markers:false,
    
    }

  })

gsap.from('.rollerimage',{
  x:500,
  opacity:1,
  scrollTrigger: {
    trigger:'.rollerimage',
    start:'top 80%',
    end:'bottom 20%',
    scrub:true,
    markers:false,
  }
})

gsap.from('.product-img-rotate',{
  y:200,
  opacity:1,
  scrollTrigger: {
    trigger:'.product-img-rotate',
    start:'top 80%',
    end:'top 20%',
    scrub:true,
    markers:false,
  }
})


});
