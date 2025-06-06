"use client";

import { useEffect, useState } from "react";

interface State {
  width: number;
  height: number;
}

export function useWindowDimension() {
  const [windowSize, setWindowSize] = useState<State>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
