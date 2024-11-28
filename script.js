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
    x:200,
    y:100,
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
    top:'top 100%',
    end:'bottom 20%',
    scrub:true,
    markers:false,     
  },
  opacity:0.1,

})

gsap.to('.heading-title', {
  opacity:0.1,
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
    delay:1,
    scrollTrigger : {
      trigger:'.hero_row',
      start:'top 100%',
      end:'bottom 10%',
      scrub:true,
      markers:false,     
    },

  })

  gsap.to('.box_row2', {
    y:30,
    opacity:0,
    duration:2,
    scrollTrigger : {
      trigger:'.box_row2',
      start:'top 20%',
      end:'bottom 50%',
      scrub:true,
      markers:false,     
    }

  })

  gsap.from('.hero_column', {
    y:100,
    opacity:0,
    scale:2,
    duration:2,
    scrollTrigger : {
      trigger:'.hero_column',
      start:'top 90%',
      end:'top 20%',
      scrub:true,
      markers:false,     
    }

  })










gsap.from('.banner-img',{
  y:-100,
  opacity:1,
  duration:0.5,
  repeat:-1
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



// Get all profile images
const profiles = document.querySelectorAll('.profile');
const tooltip = document.getElementById('tooltip');

// Loop through profiles and add click event listeners
profiles.forEach(profile => {
    profile.addEventListener('click', function (event) {
        // Get the feedback from the profile data attribute
        const feedback = this.getAttribute('data-feedback');
        
        // Set the feedback text in the tooltip
        tooltip.textContent = feedback;
        
        // Position the tooltip relative to the clicked profile image
        const rect = profile.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        
        // Show the tooltip
        tooltip.style.display = 'block';
    });
});

// Hide the tooltip when clicking outside the profiles
document.addEventListener('click', function (event) {
    if (!event.target.closest('.profile')) {
        tooltip.style.display = 'none';
    }
});

const boxes = document.querySelectorAll('.box');

function restartAnimation() {
  boxes.forEach(box => {
    // Remove the animation class
    box.style.animation = 'none';
    
    // Force reflow to reset the animation
    box.offsetHeight; // This line forces a reflow

    // Re-apply the animation class
    box.style.animation = '';
  });
}



let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  gsap.globalTimeline.clear(); // Clears all animations on the global timeline
});

mm.add("(min-width: 769px)", () => {

});
