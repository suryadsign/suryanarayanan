  gsap.registerPlugin(ScrollTrigger)
  const splitTypes = document.querySelectorAll('.heading,.quote')

  splitTypes.forEach((char,i) => {
    const text = new SplitType (char, { types: 'chars,words'})

    gsap.from(text.chars, {
      scrollTrigger : {
        trigger:char,
        start:'top 70%',
        end:'top 20%',
        scrub:false,
        markers:false
      },
      y:100,
      opacity:0,
      stagger:0.08,
      duration:0.1


    })
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

