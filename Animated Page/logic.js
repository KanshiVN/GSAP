// gsap.to("#box",{
//     x:1000,
//     duration:5,
//     rotate:580,
//     backgroundColor:"blue",
//     delay:1
// })

// gsap.from("#box",{
//     x:1000,
//     duration:5,
//     rotate:580,
//     backgroundColor:"blue",
//     delay:1
// })

var timeline = gsap.timeline();

timeline.to("#box1",{
    x:1000,
    duration:3,
    rotate:360,
    scale:0.5
})
timeline.to("#box2",{
    x:1000,
    duration:3,
    rotate:360,
    scale:0.5

})
timeline.to("#box3",{
    x:1000,
    duration:3,
    rotate:360,
    scale:0.5
})