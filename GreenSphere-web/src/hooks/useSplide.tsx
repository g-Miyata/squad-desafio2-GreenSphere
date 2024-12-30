import { useEffect, useState } from 'react';

const getNumberOfSlides = (): number => {
  const width = window.innerWidth;
  if (width > 1200) {
    return 4;
  } else if (width > 600) {
    return 2;
  } else {
    return 1;
  }
};

export const useSplide = (): number => {
  const [numberOfSlides, setNumberOfSlides] = useState<number>(getNumberOfSlides());

  useEffect(() => {
    const handleResize = () => {
      setNumberOfSlides(getNumberOfSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return numberOfSlides;
};
