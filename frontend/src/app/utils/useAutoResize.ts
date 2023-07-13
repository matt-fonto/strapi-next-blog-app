"use client";
import { useEffect, useRef } from "react";

function useAutoResize(ref: any) {
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const resize = () => {
      currentRef.style.height = "auto";
      currentRef.style.height = `${currentRef.scrollHeight}px`;
    };

    resize();

    currentRef.addEventListener("input", resize);
    return () => currentRef.removeEventListener("input", resize);
  }, [ref]);
}

export default useAutoResize;
