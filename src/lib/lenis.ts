import Lenis from 'lenis';

let instance: Lenis | null = null;

export function initLenis() {
  if (instance) return instance;

  instance = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  function raf(time: number) {
    instance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return instance;
}

export function getLenis() {
  return instance;
}