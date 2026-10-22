import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Adds the "in" class to every .reveal element when it scrolls into view. */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Types and deletes each word in turn. */
export function useTypewriter(words, { type = 85, erase = 45, hold = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : "");
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0, len = 0, deleting = false, timer;
    const tick = () => {
      const word = words[i % words.length];
      len += deleting ? -1 : 1;
      setText(word.slice(0, len));
      let delay = deleting ? erase : type;
      if (!deleting && len === word.length) { deleting = true; delay = hold; }
      else if (deleting && len === 0) { deleting = false; i++; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);
  return text;
}

/** Counts from 0 to `to` once the element is visible. */
export function useCountUp(to, duration = 1800) {
  const ref = useRef(null);
  const [val, setVal] = useState(prefersReducedMotion() ? to : 0);
  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return [ref, val];
}

/** Tracks scroll progress (0–1), whether the page is scrolled, and the active section id. */
export function useScrollState(sectionIds) {
  const [state, setState] = useState({ progress: 0, scrolled: false, active: sectionIds[0] });
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const y = window.scrollY;
        let active = sectionIds[0];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) active = id;
        }
        setState({ progress: max > 0 ? y / max : 0, scrolled: y > 20, active });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [sectionIds]);
  return state;
}

/** Mouse-follow spotlight for cards: sets --mx / --my CSS variables. */
export const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};
