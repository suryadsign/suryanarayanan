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
      opacity:0,
      duration:0.5,
      stagger:0.05

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
    x:200,
    duration:1
  })

  gsap.from('.expertises',{
    x:200,
    opacity:0.2,
    duration:1.5,
    scrollTrigger: {
      trigger:'.expertises',
      start:'top 80%',
      end:'center 20%',
      scrub:true,
      markers:false
    }
  })

  gsap.to('.a',{
    x:100,
    y:0,
    duration:10,
  
    repeat:-1,
    scrollTrigger: {
      trigger:'.glassgroup',
      start:'top center',
      end:'bottom center',
      scrub:false,
      markers:false

    }
  })

  gsap.from('.b',{
    x:400,
    y:0,
    duration:10,
    repeat:-1,
    scrollTrigger: {
      trigger:'.glassgroup',
      start:'top center',
      end:'bottom center',
      scrub:false,
      markers:false
    }
  })

  gsap.from('.c',{
    x:-200,
    y:0,
    duration:10,
    repeat:-1,
    scrollTrigger: {
      trigger:'.glassgroup',
      start:'top center',
      end:'bottom center',
      scrub:false,
      markers:false,
    }
  })

  gsap.from('.aa,.bb',{
    y:100,
    opacity:0.2,
    duration:2,
    scrollTrigger: {
      trigger:'.projects',
      start:'top 80%',
      end:'bottom center',
      scrub:true,
      markers:false
    }
  })

  gsap.from('.cc,.dd',{
    y:50,
    opacity:0.1,
    duration:1,
    scrollTrigger: {
      trigger:'.cc',
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

  gsap.to('#viewbtn',{
    scale:2,
    opacity:1,
    scrollTrigger:{
      start:'top 50%',
      end:'bottom 20%',
      scrub:true,
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
