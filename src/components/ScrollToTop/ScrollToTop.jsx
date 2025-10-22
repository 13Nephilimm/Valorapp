import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
