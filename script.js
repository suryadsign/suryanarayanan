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
    y:-10,
    opacity:0.3,
    duration:0.4,
    stagger:0.5,
    repeat:0,
    rotation:30
  })
})



var t = TweenLite.to(".box", {scale:1.3, duration:2,ease:Linear.easeNone,scrub:true});



let tl= gsap.timeline({
  scrollTrigger:{
    trigger:'.approaches',
    start:'35% 80%',
    end:'bottom 20%',
    scrub:true,
    markers:false
  }
  })

tl.from('.approaches',{
  opacity:0,
  duration:1,
  y: -250,
  scrub:true,
})



gsap.from('.expertise',{
  y:-200,
  opacity:0.4,
  duration:1.5,
  scrollTrigger: {
    trigger:'.expertises',
    start:'top 100%',
    end:'bottom 80%',
    scrub:true,
    markers:false
  }
})

gsap.from('.heroname',{
  x:-200,
  y:0,
  opacity:0.5,
  duration:0.5,
  scrollTrigger: {
    trigger:'#herowrap',
    start:'top 80%',
    end:'bottom 20%',
    scrub:true,
    markers:false,
    pin:false,
  }
})

gsap.from('.timeline',{
  y:-200,
  opacity:0,
  duration:0.5,
  scrollTrigger: {
    trigger:'.timeline',
    start:'top 100%',
    end:'bottom 20%',
    scrub:true,
    markers:false,
    
  }
})



gsap.from('.flex',{
  y:-100,
  opacity:0.1,
  duration:1,
  scrollTrigger: {
    trigger:'.flex',
    start:'top 80%',
    end:'bottom 20%',
    scrub:true,
    markers:false
  }
})


gsap.from('.icon',{
  y:50,
  opacity:0,
  scrollTrigger: {
    trigger:'.icon',
    scrub:false,
    markers:false
  }
})

gsap.from('.photos',{
  y:10,
  opacity:0,
  scrollTrigger: {
    trigger:'.photos',
    scrub:true,
    pin:true,
    markers:false
  }
})



gsap.to('.hero',{
  y:100,
  opacity:0,
  scrollTrigger: {
    trigger:'.hero',
    scrub:true,
    pin:true,
    markers:false
  }
})

gsap.from('.contactdetail',{
  y:50,
  opacity:0,
  scrollTrigger: {
    trigger:'.icon',
    scrub:false,
    markers:false
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

let play = document.querySelector('.play');
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);

play.addEventListener('mouseenter', ()=> {
audioArr[0].play()
});


document.addEventListener("DOMContentLoaded", function(event) {

  var audioClick = document.querySelector('#myAudio');

  var clickMe = document.querySelectorAll('.home,.work,.interactson');

  for (var i = 0; i < clickMe.length; i++) {
      var s = clickMe[i]

      s.addEventListener('mousedown', function() {
          audioClick.currentTime = 0;
          audioClick.play();
      });

      s.addEventListener('mouseup', function() {
          audioClickUp.currentTime = 0;
          audioClickUp.play();
      });
  }
});







