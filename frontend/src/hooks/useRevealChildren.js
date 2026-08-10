import { useEffect, useRef } from 'react';

/**
 * Observe all `.reveal` descendants (and, optionally, the container itself)
 * inside a single ref. When each one enters the viewport it receives the
 * `is-visible` class — the exact hook driving `.reveal` in `global.css`.
 *
 * Use this on a parent section when many child cards / tiles / list items
 * each carry the `reveal` class. Attach the returned ref to the section's
 * outermost element.
 *
 * @param {Object} options
 * @param {number}  [options.threshold=0.1]       IntersectionObserver threshold
 * @param {string}  [options.rootMargin='0px 0px -60px 0px'] IntersectionObserver rootMargin
 * @param {boolean} [options.once=true]           Reveal only on first intersection
 */
const useRevealChildren = ({
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    // Collect every `.reveal` descendant plus the container itself if it also
    // carries the class.
    const targets = new Set(root.querySelectorAll('.reveal'));
    if (root.classList.contains('reveal')) targets.add(root);
    if (targets.size === 0) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
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

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
};

export default useRevealChildren;
