import React from "react";
import { sectionsData } from "../constants";
import { AnimatedSection } from "../components";

const Content = () => {
  return (
    <section className="content-section section">
      <div className="container">
        {sectionsData.map((data) => (
          <AnimatedSection key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Content;
