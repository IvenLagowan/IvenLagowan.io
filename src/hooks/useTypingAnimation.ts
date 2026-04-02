import { useState, useEffect, useCallback } from "react";

export function useTypingAnimation(words: string[], speed = 100, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIndex];
    if (!current) return;

    if (!isDeleting) {
      setDisplayed(current.slice(0, displayed.length + 1));
      if (displayed.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
    } else {
      setDisplayed(current.slice(0, displayed.length - 1));
      if (displayed.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayed, wordIndex, isDeleting, pause, words]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, speed]);

  return displayed;
}
