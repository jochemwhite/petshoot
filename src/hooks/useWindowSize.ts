import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // check if window is undefined
    if (typeof window === "undefined") return;

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
