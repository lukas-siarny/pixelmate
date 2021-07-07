import React from "react";

/**
 * 
 * @returns 
 * const observerOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const contactObserverOptions = {
  threshold: 0,
};

const observer = (element, options) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      element.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  }, options);

  observer.observe(element);
};

const address = document.querySelector("#address");
const cardsValues = document.querySelectorAll(".card-values");
const needsValues = document.querySelectorAll(".card-needs");

cardsValues.forEach((card) => observer(card, observerOptions));
needsValues.forEach((card) => observer(card, observerOptions));
observer(address, contactObserverOptions);
observer(form, contactObserverOptions);
 */
type Props = {
  triggerOnce?: boolean;
  options?: {
    rootMargin?: "string";
    threshold?: number;
    root?: Element | null;
  };
};

const useObserver = ({
  triggerOnce = false,
  options = { threshold: 1 },
}: Props): [React.Dispatch<React.SetStateAction<Element | null>>, boolean] => {
  const [ref, setRef] = React.useState<Element | null>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);

      if (triggerOnce && entry.isIntersecting) {
        observer.unobserve(ref!);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
};

export default useObserver;
