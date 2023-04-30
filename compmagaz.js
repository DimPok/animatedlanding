const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    },
});



const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".sub-page",
        markers: {startColor: "blue", endColor: "blue"},
        scrub: true,
        start: "-35%",
        end: "45%",
    },
});

tlH.fromTo('.highlight', {color: "rgba(255, 255, 255, 0.4"}, 
{color: "rgba(255, 255, 255, 1", stagger: 1}
);


const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".sub-page",
        markers: {startColor: "pink", endColor: "pink"},
        scrub: true,
        start: "-25%",
        end: "55%",
    },
});

tlHRemove.to('.highlight', {color: "rgba(255, 255, 255, 0.4", stagger: 1});


const tlSplit =  gsap.timeline({
     scrollTrigger:{
        trigger: ".subsub-page",
        start: "-25%",
        end: "30%",
        markers: true,
        scrub: true,
     } 

});

tlSplit.fromTo(".democomp1", {x: "70%"}, {x: "35%"});
tlSplit.fromTo(".democomp2", {x: "-70%"}, {x: "-37%"}, "<");
tlSplit.fromTo(
    ".computer-text-left",
    { x: 70, opacity: 0 },
    { opacity: 1, x: 0 },
    "<"
  );
  tlSplit.fromTo(
    ".computer-text-right",
    { x: -70, opacity: 0 },
    { opacity: 1, x: 0 },
    "<"
  );


  const tlSplitPin = gsap.timeline({
      scrollTrigger: {
        trigger: ".subsub-page",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%",
      },
  });


  const swatches = document.querySelectorAll(".swatches img");
  const gallery = document.querySelector(".comp-gallery");
  const slides = document.querySelectorAll(".comp-gallery-container");
  
  let currentSwatch = "blue";
  let topIndex = 2;
  
  swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;
  
    swatch.addEventListener("click", (e) => {
      let swatchName = e.target.getAttribute("swatch");
      let closeUp = document.querySelector("." + swatchName);
      //Иллюстрации будут отображены в четкой последовательности
      if (currentSwatch === swatchName) return;
  
      gsap.set(closeUp, { zIndex: topIndex });
      gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
  
      //Демонстрация товаров
      gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
      //zIndex
      topIndex++;
      currentSwatch = swatchName;
    });
  });


  const tlVideo = gsap.timeline({
     scrollTrigger: {
        trigger: '.media-page',
        start: '0%',
        end: '150%',
        scrub: true,
        pin: true,
     },
  });

  tlVideo.fromTo('.computer-video',
   {currentTime: 0},
    {currentTime: 1, duration: 1}
    
  );


  tlVideo.fromTo('.computer-info-comtainer h3',
   {opacity: 0}, 
   {opacity: 1, stagger: 0.25, duration: 0.5},
   "<"
   );


const tlParalax  = gsap.timeline({
    scrollTrigger: {
      trigger: '.final-block',
      start: '-25%',
      end: '50%',
      scrub: true,

    },
});


tlParalax.fromTo('.opisanie-grahpics', {y: 0}, {y: -75});
tlParalax.fromTo('.kartinka-container', {y: 0}, {y: -75}, "<");
tlParalax.fromTo(
  '.gamers-comp',
   {y: 0, scale: 0.8},
   {y: -300, scale: 1},
    "<"
);