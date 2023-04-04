import { useEffect, useRef, useState } from 'react';
import { IVisibleSections } from 'hooks/useInView/types';

const useInView = (selector: string) => {
  const [visibleSections, setVisibleSections] = useState<IVisibleSections>({});

  const observer = useRef<IntersectionObserver | null>(null);
  const sections = useRef<Element[] | null>(null);

  const inView = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));

        observer.current?.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(inView, { threshold: 0.3 });

    sections.current = [...Array.from(document.querySelectorAll(selector))];
    sections.current.forEach((section) => observer.current?.observe(section));

    return () => observer.current?.disconnect();
  }, [sections, selector]);

  return visibleSections;
};

export default useInView;
