import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      const offset = -100; // Adjust this value as needed
      const elementTop = hashElement.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: elementTop + offset,
        behavior: "smooth",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
