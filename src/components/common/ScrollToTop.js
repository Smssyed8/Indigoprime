import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css"; // import custom CSS file for styling

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // returning null because this component doesn't have any visible UI
}

export default ScrollToTop;
