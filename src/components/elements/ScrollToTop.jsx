
/*
A component that ensures that when you change pages, the page automatically scrolls to the top.

I wanted each page to scroll to the top when changing pages and therefore started looking for information about this.
Then I found this function through a youtube tutorial which then referred to the "React Router" website.
So I am not the one who built this code, the code was already available at React Router as a ready-made code block! (Source reference is available if needed)
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}