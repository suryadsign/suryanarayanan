gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.quote,.nameDescription,.heading')

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
    y:-100,
    opacity:0.3,
    duration:0.5,
    stagger:0

  })
})

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
  scrub:true
})

gsap.from('.expertise',{
  y:-200,
  opacity:0,
  duration:1.5,
  scrollTrigger: {
    trigger:'.expertises',
    start:'top 70%',
    end:'center 20%',
    scrub:true,
    markers:false
  }
})

gsap.from('.a',{

  duration:2.5,
  ease: "circ.inOut",
  rotate:360,
  scrollTrigger: {
    start:'top center',
    end:'bottom center',
    scrub:true,
    markers:false

  }
})

gsap.from('.b',{
  x:-300,
  duration:10,
  scrollTrigger: {
    start:'top 80%',
    end:'bottom center',
    scrub:true,
    markers:false
  }
})

gsap.from('.c',{
  x:900,
  duration:10,
  
  scrollTrigger: {
    start:'top 80%',
    end:'bottom center',
    scrub:true,
    markers:false,
  }
})

gsap.from('.aa,.bb',{
  y:-100,
  opacity:0.2,
  duration:1.5,
  scrollTrigger: {
    trigger:'.projects',
    start:'top 80%',
    end:'bottom center',
    scrub:false,
    markers:false
  }
})

gsap.from('.cc,.dd',{
  y:-200,
  opacity:0.1,
  duration:1,
  scrollTrigger: {
    trigger:'.cc',
    start:'top 80%',
    end:'bottom 20%',
    scrub:false,
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


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
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
