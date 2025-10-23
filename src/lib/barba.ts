import barba from '@barba/core';

let initialized = false;

export function initBarba() {
  if (initialized) return;
  initialized = true;

  barba.init({
    // Disable prefetch to keep things simple in SPA
    prefetch: false,
    transitions: [
      {
        name: 'fade',
        async leave(data) {
          return new Promise<void>((resolve) => {
            const el = data.current.container as HTMLElement;
            el.classList.add('barba-leave');
            setTimeout(() => {
              el.classList.remove('barba-leave');
              resolve();
            }, 250);
          });
        },
        async enter(data) {
          const el = data.next.container as HTMLElement;
          el.classList.add('barba-enter');
          setTimeout(() => {
            el.classList.remove('barba-enter');
          }, 250);
        },
      },
    ],
  });
}