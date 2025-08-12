import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      [".hero-subtitle", ".hero-title", ".hero-action"],
      {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
      },
      { autoAlpha: 1, y: 0, stagger: 0.2 }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
          // markers: true,
        },
      })
      .to(
        ".sky",
        {
          y: 1000,
        },
        "0"
      )
      .to(
        ".mountains",
        {
          y: -300,
        },
        "0"
      )
      .to(
        ".man-standing",
        {
          y: -100,
        },
        "0"
      )
      .to(
        ".hero-content",
        {
          y: 450,
          autoAlpha: 0,
        },
        "0"
      );
  }, []);

  return (
    <section className="hero-section section" id="section-00">
      <div className="hero-image-wrapper">
        <img src="./images/sky.webp" className="sky" alt="sky" />
        <img
          src="./images/mountains.webp"
          className="mountains"
          alt="mountains"
        />
        <img
          src="./images/man-standing.webp"
          className="man-standing"
          alt="man-standing"
        />
      </div>

      <div className="hero-content">
        <h5 className="hero-subtitle">A Hiking guide</h5>
        <h1 className="hero-title">
          <span className="title-span">Be prepared for the</span> <br />
          <span className="title-span">Mountains and beyond!</span>
        </h1>
        <a href="#section-01" className="hero-action">
          Scroll down
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
