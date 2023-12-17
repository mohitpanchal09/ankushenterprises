import { React, useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div></div>;
}
