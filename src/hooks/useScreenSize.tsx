import { useState, useEffect } from "react";

type ScreenSize = "sm" | "md" | "lg" | "xl" | "xxl";

const SCREEN_SIZES: { [key in ScreenSize]: number } = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: Infinity,
};

export const useScreenSize = (size: ScreenSize): boolean => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${SCREEN_SIZES[size]}px)`
    );
    setIsMatch(mediaQuery.matches);

    const handleChange = () => setIsMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [size]);

  return isMatch;
};
