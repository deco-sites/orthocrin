/**
 * This island animates and adds interactivity to sliders.
 * It works by adding interactivity to static markup.
 *
 * 1. Render all your content to html
 * 2. Add data attributes to specific parts of your html. These data attributes
 * wll be used by this component to hydrate and animate the slider on the browser
 * 3. create an id with `useId` hook and place it in a container containing your
 * slider
 *
 * For an example, check out how the VideoCarousel and Alert use this component
 *
 * Why not just add this logic to both VideoCarousel and Alert and make them an island?
 * When doing this, all code they depend on and their markup (html) will be included in
 * the final JavaScript. This will increase the amount of JS shipped to the browser,
 * increasing TBT metric and making your website slow.
 */
import { useEffect, useState } from "preact/hooks";

interface Props {
  items: number;
  delay?: number;
  itemsPerPageMobile?: number;
  itemsPerPageDesktop?: number;
  id: string;
  carouselId: string;
}

function Slider({
  id,
  items,
  carouselId,
  itemsPerPageDesktop = 1,
  itemsPerPageMobile = 1,
  delay = 2_000,
}: Props) {
  const [index, setIndex] = useState(0);

  // Timer
  useEffect(() => {
    let id = 0;

    if (window.innerWidth < 768) {
      id = setInterval(
        () => setIndex(items - index > itemsPerPageMobile ? index + 1 : 0),
        delay,
      );
    } else {
      id = setInterval(
        () => setIndex(items - index > itemsPerPageDesktop ? index + 1 : 0),
        delay,
      );
    }

    return () => {
      clearInterval(id);
    };
  }, [index, delay, items]);

  // Focus the right content
  useEffect(() => {
    const content = document
      // .getElementById(id)
      ?.querySelector(
        `[data-slider-content="${carouselId}"]`,
      ) as HTMLDivElement;

    if (content) {
      content.style.transform = `translateX(-${(100 / items) * index}%)`;
    }

    const dots = document?.querySelectorAll(`[data-dot="${carouselId}"]`);

    if (dots) {
      dots.forEach((dot, it) =>
        it === index
          ? dot.setAttribute("disabled", "")
          : dot.removeAttribute("disabled")
      );
    }
  }, [index]);

  // Handles next/prev elements
  useEffect(() => {
    const prevElement = document
      // .getElementById(id)
      ?.querySelector(`[data-slider-prev="${carouselId}"]`);
    const nextElement = document
      // .getElementById(id)
      ?.querySelector(`[data-slider-next="${carouselId}"]`);

    const next = () => setIndex((i) => (i + 1) % items);
    const prev = () => setIndex((i) => (i > 0 ? i - 1 : items - 1));

    nextElement?.addEventListener("click", next);
    prevElement?.addEventListener("click", prev);

    return () => {
      nextElement?.removeEventListener("click", next);
      prevElement?.removeEventListener("click", prev);
    };
  }, [items]);

  // Handles button control elements (dots)
  useEffect(() => {
    const dots = document?.querySelectorAll(`[data-dot="${carouselId}"]`);

    if (!dots) {
      return;
    }

    const listeners: Array<() => void> = [];

    dots.forEach((dot, index) => {
      const set = () => setIndex(index);

      listeners.push(set);
      dot.addEventListener("click", set);
    });

    return () => {
      dots.forEach((dot, index) =>
        dot.removeEventListener("click", listeners[index])
      );
    };
  }, []);

  return <div />;
}

export default Slider;
