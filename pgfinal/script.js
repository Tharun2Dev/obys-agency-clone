
var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.5,
    delay:0.6
})
tl.from(".line-part1",{
    opacity:0,
    onStart:function(){
var h5Timer = document.querySelector(".line-part1 h5");
var grow = 0;
setInterval(function(){
    if(grow<100)
        h5Timer.innerHTML = grow++;
    else
         h5Timer.innerHTML = grow;
},30)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to(".loader",{
    opacity:0,
    duration:0.5,
    delay:3.3
})
tl.from(".page1",{
    opacity:0,
    delay:0.2,
    duration:0.5,
    ease:Power4,
    y:1600
})
tl.to(".loader",{
   display:"none"
})