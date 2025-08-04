import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const id = location.hash?.replace("#", "");
    return id ? document.getElementById(id) : null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      const offset = -100; // Optional top offset
      const elementTop =
        hashElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop + offset,
        behavior: "smooth",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
