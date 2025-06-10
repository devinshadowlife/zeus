import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current; // Copy ref value
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsInView(true);
        },
        { threshold }
      );
      observer.observe(element);

      return () => {
        if (element) {
          observer.unobserve(element); // Use copied value
        }
      };
    }
  }, [threshold]); // Dependency array includes threshold

  return { ref, isInView };
}