import { gsap } from "../../node_modules/gsap/dist/gsap.js";

const animateVisible = (block, ratio, isIntersecting) => {
  if (ratio > 0 && isIntersecting) {
    gsap.to(block.querySelectorAll("*"), {
      duration: 0.3,
      autoAlpha: 1,
      y: "0",
      stagger: 0.03,
      ease: "Linear.easeNone",
    });
  } else {
    gsap.set(block.querySelectorAll("*"), {
      autoAlpha: 0,
      y: "1rem",
    });
  }
};
const allSections = [...document.querySelectorAll("main section")];
// Sections without footer
const blocks = allSections.slice(0, -1);

const blocksObserver = new IntersectionObserver(
  (entries) => {
    return entries.forEach((event) => {
      const { target, intersectionRatio, isIntersecting } = event;

      animateVisible(target, intersectionRatio, isIntersecting);
    });
  },
  { threshold: 0.5 }
);
for (const block of blocks) {
  blocksObserver.observe(block);
}

btnScroll.addEventListener("click", function (e) {
  const sectionCoords = section2.getBoundingClientRect();
  section2.scrollIntoView({ behavior: "smooth" });
});
