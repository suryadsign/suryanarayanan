gsap.from('.flex_column1',{
  y:0,
  duration:1.5,
  scrollTrigger: {
    trigger:'.flex_row',
    start:'top 30%',
    end:'',
    scrub:true,
    markers:false
  }
})

gsap.from('.flex_column2',{
  y:0,
  duration:10,
  scrollTrigger: {
    trigger:'.flex_row',
    start:'top 20%',
    end:'bottom 0%',
    scrub:true,
    markers:false
  }
})

gsap.from('.flex_column3',{
  y:0,
  duration:1.5,
  scrollTrigger: {
    trigger:'.flex_row',
    start:'top 10%',
    end:'',
    scrub:true,
    markers:false
  }
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


// gsap.from('.photos',{
//   y:10,
//   opacity:0,
//   scrollTrigger: {
//     trigger:'.photos',
//     scrub:true,
//     pin:true,
//     markers:false
//   }
// })


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

// Listen for the end of the last animation (box4)
boxes[boxes.length - 1].addEventListener('animationend', () => {
  // Delay before restarting the animation sequence
  setTimeout(restartAnimation, 1000); // Adjust the timeout as needed
});

// Start the animation for the first time
restartAnimation();


let mm = gsap.matchMedia();

mm.add("(max-width: 799px)", () => {
  gsap.to('.flex_column3',{
    y:10,
    duration:1,
    scrollTrigger: {
      trigger:'.flex_column3',
      start:'top 10%',
      end:'',
      scrub:false,
      markers:false
    }
  })

  gsap.to('.flex_column2',{
    y:10,
    duration:1,
    scrollTrigger: {
      trigger:'.flex_column2',
      start:'top 10%',
      end:'',
      scrub:false,
      markers:false
    }
  })

  gsap.to('.flex_column1',{
    y:10,
    duration:1,
    scrollTrigger: {
      trigger:'.flex_column1',
      start:'top 10%',
      end:'',
      scrub:false,
      markers:false
    }
  })

});

mm.revert();
