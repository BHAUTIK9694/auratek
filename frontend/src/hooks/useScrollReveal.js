import { useEffect, useRef } from 'react';

/**
 * Adds an `is-visible` class to an element the first time it enters the viewport.
 * Pair with the `.reveal` utility class in `global.css` for a subtle fade-and-rise animation.
 *
 * @param {Object} options
 * @param {number} options.threshold IntersectionObserver threshold (0 - 1). Default 0.15.
 * @param {string} options.rootMargin IntersectionObserver rootMargin. Default '0px 0px -60px 0px'.
 * @param {boolean} options.once Reveal only on first intersection. Default true.
 */
const useScrollReveal = ({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      if (node) node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
};

export default useScrollReveal;
