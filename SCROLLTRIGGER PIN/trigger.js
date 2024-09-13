gsap.to('#page2 img',{
    width:"100%",
    height:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.to("#page3 h1",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:2,
        pin:true,
        start:"top 0",
        end:"top -100%"
    }
})