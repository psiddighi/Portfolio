import { NavigateFunction } from 'react-router-dom';
import { getLenis } from './lenis';

export async function navigateWithTransition(navigate: NavigateFunction, to: string, currentPath?: string) {
  const container = document.querySelector('[data-barba="container"]') as HTMLElement | null;

  // Normalize path for HashRouter
  const target = to.startsWith('/') ? to : `/${to}`;

  // Same-route: just scroll to top smoothly
  if (currentPath && currentPath === target) {
    const lenis = getLenis();
    lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Create a clone overlay to avoid white flash during route switch
  let clone: HTMLElement | null = null;
  if (container) {
    clone = container.cloneNode(true) as HTMLElement;
    clone.classList.add('barba-clone');
    document.body.appendChild(clone);
  }

  // Navigate to next route via React Router
  navigate(target);

  // After next route renders, animate enter on new container and fade out clone
  requestAnimationFrame(() => {
    const nextContainer = document.querySelector('[data-barba="container"]') as HTMLElement | null;
    if (nextContainer) {
      nextContainer.classList.add('barba-enter');
      setTimeout(() => {
        nextContainer.classList.remove('barba-enter');
      }, 250);
    }

    if (clone) {
      clone.classList.add('barba-leave');
      setTimeout(() => {
        clone?.remove();
      }, 250);
    }
  });

  const lenis = getLenis();
  lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' });
}