gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.name')

splitTypes.forEach((char,i) => {
  const text = new SplitType (char, { types: 'chars,words'})

  gsap.from(text.chars, {
    scrollTrigger : {
      trigger:char,
      start:'top 80%',
      end:'top 20%',
      scrub:false,
      markers:false,     
    },
    y:40,
    opacity:0,
    repeat:0,
    duration:3,
    stagger:0.025
  })
})





gsap.from('.banner-img',{
  y:-100,
  opacity:1,
  duration:0.5,
  repeat:-1
})




gsap.from('.icon',{
  y:-20,
  opacity:1,
  duration:1,
  scrollTrigger: {
    trigger:".icon",
    scrub:false,
    markers:false,
  }
})


gsap.from('.roller',{
  x:500,
  opacity:1,
  scrollTrigger: {
    trigger:'.roller',
    start:'top 80%',
    end:'bottom 20%',
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


  gsap.to('.flex_column1',{
    yPercent:35,
    ease:'power1.inOut',
    duration:25,
    scrollTrigger: {
      trigger:'.flex_column1',
      start:'top top',
      end:'bottom bottom',
      scrub:true,
      markers:false
    }
  })
  
  gsap.to('.flex_column2',{
    yPercent:15,
    ease:"none",
    scrollTrigger: {
      trigger:'.flex_column2',
      start:'top top',
      end:'bottom bottom',
      scrub:true,
      markers:false
    }
  })
  
  gsap.to('.flex_column3',{
    yPercent:0,
    ease:"none",
    scrollTrigger: {
      trigger:'.flex_column3',
      start:'top top',
      end:'bottom bottom',
      scrub:true,
      markers:false
    }
  })});
