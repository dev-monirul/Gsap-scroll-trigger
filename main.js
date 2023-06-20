gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').array.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});