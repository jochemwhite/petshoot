import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType: string, 
  callback: (e: Event) => void, 
  element?: HTMLElement | Window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const targetElement: HTMLElement | Window = element ?? window;
    if (!targetElement) return;
    const handler = (e: Event) => callbackRef.current(e);
    targetElement.addEventListener(eventType, handler);

    return () => targetElement.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
