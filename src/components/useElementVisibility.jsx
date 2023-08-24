import { useEffect, useRef, useState } from 'react';

const useElementVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // The viewport is used as the root
      rootMargin: '0px', // Margin around the root
      threshold: 0.1, // How much of the element should be visible before the callback is triggered (0.1 means 10%)
    };

    const callback = (entries) => {
      // The callback function that will be executed when the target element intersects with the viewport
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.unobserve(targetRef.current);
    };
  }, []);

  return { targetRef, isVisible };
};

export default useElementVisibility;