const tl = gsap.timeline();

    tl.to(".loader-spinner",{
        delay:0.5,
        display:"none"
    })
    .to(".loader .loader-rgls div",{
        y:"-100%",
        duration:1,
        stagger:-0.05,
        ease: "power4.out",
    })
    .to(".loader",{
        y:"-100%"
    })


 window.addEventListener("mousemove", e => {
    // console.log(e.clientX, e.clientY);
    gsap.to(".cursor",{
        x:e.clientX,
        y:e.clientY,
        duration:0.3,
        ease:"ease"
    })
 })   


 const navLinks = document.querySelectorAll(".nav__list li");

 navLinks.forEach(item=>{
    item.addEventListener("mouseover",e=>{
        gsap.to(".cursor",{
            scale:5,
            duration:0.3,
            mixBlendMode:"difference"
        })
    })
    item.addEventListener("mouseleave",e=>{
        gsap.to(".cursor",{
            scale:1,
            duration:0.1,
            mixBlendMode:"normal"
        })
    })
 })

 document.querySelector(".home__img").addEventListener("mouseover",e=>{
    gsap.to(".cursor",{
            scale:1,
            duration:0.1,
            mixBlendMode:"normal"
        })
 })