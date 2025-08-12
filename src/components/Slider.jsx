import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Slider = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".slider-list-item",
      {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
      },
      { autoAlpha: 1, y: 0, stagger: 0.2 }
    );
    gsap.fromTo(
      ".slider-progress",
      {
        autoAlpha: 0,
        y: "100",
      },
      {
        autoAlpha: 1,
        y: "0",
        delay: 1,
      }
    );
    gsap.to(".slider-progress-bar", {
      height: "100%",
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  }, []);
  return (
    <nav className="slider">
      <div className="container">
        <ul className="slider-list">
          <li className="slider-list-item">
            <a href="#section-00">Start</a>
          </li>
          <li className="slider-list-item">
            <a href="#section-1">01</a>
          </li>
          <li className="slider-list-item">
            <a href="#section-2">02</a>
          </li>
          <li className="slider-list-item">
            <a href="#section-3">03</a>
          </li>
        </ul>
        <div className="slider-progress">
          <div className="slider-progress-bar" style={{ height: "20%" }}></div>
        </div>
      </div>
    </nav>
  );
};

export default Slider;
