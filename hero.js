// Hero animations: marquee, signature draw, parallax and reveals using GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function(){
  // Respect user reduced-motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) Robust marquee: ensure duplicated content for seamless loop
  const marqueeInner = document.getElementById('marquee');
  if(marqueeInner && !prefersReduced){
    // duplicate once if content not already long enough
    if (marqueeInner.children.length < 6) {
      marqueeInner.innerHTML = marqueeInner.innerHTML + marqueeInner.innerHTML;
    }
    gsap.set(marqueeInner, { xPercent: 0 });
    const marqueeTween = gsap.to(marqueeInner, {
      xPercent: -50,
      ease: 'none',
      duration: 22,
      repeat: -1
    });

    // Pause marquee when tab is hidden to save CPU
    document.addEventListener('visibilitychange', () => {
      marqueeTween.paused(document.hidden);
    });
  }

  // 2) Signature draw-in: animate stroke-dashoffset from path length -> 0
  const sig = document.getElementById('sigPath');
  if(sig){
    const length = sig.getTotalLength();
    sig.style.strokeDasharray = length;
    // If reduced motion prefer instant visible state
    if(prefersReduced){
      sig.style.strokeDashoffset = 0;
    } else {
      sig.style.strokeDashoffset = length;
      // animate when signature enters view (once)
      gsap.to(sig, {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.signature', start: 'top 85%', toggleActions: 'play none none none' }
      });
    }
  }

  // 3) Parallax: background text scales and translates slightly while scrolling
  if(!prefersReduced){
    gsap.to('.bg-text .word', {
      scale: 1.08,
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-viewport', start: 'top top', end: 'bottom top', scrub: 0.8
      }
    });

    // Portrait subtle parallax and grayscale-to-color on scroll
    gsap.to('#portraitImg', {
      filter: 'grayscale(0%) contrast(1)',
      scale: 1.02,
      ease: 'power1.out',
      scrollTrigger: { trigger: '.hero-viewport', start: 'top top', end: 'bottom top', scrub: 0.9 }
    });
  } else {
    // If reduced-motion, ensure portrait is shown in full color
    const p = document.getElementById('portraitImg');
    if(p) p.style.filter = 'grayscale(0%) contrast(1)';
  }

  // 4) Reveal clip for headline lines (play once on enter)
  gsap.utils.toArray('.reveal-clip').forEach((el, i) => {
    const child = el.children[0];
    if(prefersReduced){
      gsap.set(child, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(child, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: i * 0.08,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
      });
    }
  });

  // 5) Small entrance for portrait and signature on load (skip if reduced-motion)
  if(!prefersReduced){
    gsap.from('#portraitImg', { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', delay: 0.25 });
    gsap.from('.signature', { y: 20, opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.4 });
  }
});
