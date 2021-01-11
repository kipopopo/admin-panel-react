import { useState, useRef, useEffect } from "react";

function useVisible(initialVisible) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const node = useRef(null);

  const handleClickOutside = (event) => {
    if (node.current && !node.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { node, isVisible, setIsVisible };
}

export default useVisible;
