import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedSection = ({
  id,
  imageSrc,
  counter,
  subtitle,
  title = [],
  copy,
  linkHref = "#",
}) => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id} .content-row`,
          start: "center-=100 center",
          end: "center top",
          scrub: 0.2,
          pin: `#${id} .content-row`,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        [
          `#${id} .content-subtitle`,
          `#${id} .content-title span`,
          `#${id} .content-copy`,
          `#${id} .content-action`,
        ],
        { autoAlpha: 0, y: 100, stagger: 0.2 },
        { autoAlpha: 1, y: 0, stagger: 0.2 },
        "0"
      )
      .fromTo(`#${id} .counter`, { autoAlpha: 0 }, { autoAlpha: 1 }, "0")
      .fromTo(
        `#${id} .content-image img`,
        { autoAlpha: 0, scale: 1.5 },
        { autoAlpha: 1, scale: 1 },
        "0"
      );
  }, []);

  return (
    <div className="content-wrapper" id={id}>
      <div className="content-row">
        <div className="content-image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="content-content">
          <h5 className="content-subtitle">
            <span className="counter">{counter}</span>
            {subtitle}
          </h5>
          {title.length > 0 && (
            <h2 className="content-title">
              {title.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h2>
          )}
          <p className="content-copy">{copy}</p>
          <a href={linkHref} className="content-action">
            read more
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="#FBD784"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
