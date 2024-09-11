
let tl = gsap.timeline();

gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.3 //used to make intervals:: all h3 will come with 1sec interval
})

tl.from('#main h1',{
    x:-500,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.4
})

tl.from('img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.8,
    stagger:0.6
})