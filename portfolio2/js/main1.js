gsap.registerPlugin(ScrollTrigger);
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_1",
    markers: true,
    scrub: true,
    start: "top top",
    end: "250% bottom",
    pin: true,
  },
});

timeline1.to(".main_title_1", {
  duration: 1,
  opacity: 1,
  x: -900,
});
timeline1.to(
  ".main_title_2",
  {
    duration: 1,
    opacity: 1,
    x: 900,
  },
  "<"
);
