gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.name,.nameDescription,.heading')

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
    duration:1,
    stagger:0,

  })
})

var t = TweenLite.to("#myElement", 1, {text:"Strawberry", color:"#f00", ease:Linear.easeNone, paused:true, reversed:true});


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



gsap.from('.timeline',{
  y:100,
  opacity:0.5,
  duration:1.5,
  scrollTrigger: {
    trigger:'.timeline',
    start:'top 100%',
    end:'bottom 20%',
    scrub:true,
    markers:false,
    
  }
})


gsap.to('.a',{
  y:900,
  repeat:0,
  scale:1.5,
  scrollTrigger: {
    start:'top center',
    end:'bottom center',
    scrub:true,
    markers:false

  }
})

gsap.from('.b',{
  x:-300,
  ease:"bounce.in",
  type:"rotation",
  runbackwards:true,
  scrollTrigger: {
    start:'top 80%',
    end:'bottom center',
    scrub:true,
    markers:false
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

gsap.from('.spark',{
  y:10,
  opacity:0,
  scrollTrigger: {
    trigger:'.spark',
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

const cercle = document.querySelector(".works");
const imgs = document.querySelectorAll('img1,img2,img3,img4,img5');

const TL = gsap.timeline({ paused: true });

TL.to(imgs, {
  scale: 1.0,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.7)"
});

cercle.addEventListener("mouseenter", () => {
  TL.play();
});
cercle.addEventListener("mouseout", () => {
  TL.reverse();
});

document.querySelector('.coffee1').scrollIntoView({
  behavior: 'smooth'
});