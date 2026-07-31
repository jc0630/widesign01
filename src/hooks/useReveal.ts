import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    revealEls.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);
}
