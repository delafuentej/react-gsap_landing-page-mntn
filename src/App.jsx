import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { Navbar, Slider } from "./components";
import { Hero, Content, Footer } from "./sections";

//https://github.com/YT-PixelPerfectLabs/MNTN-Landing-Page-UI/tree/main
//https://www.youtube.com/watch?v=wV8ue2wiB4U&t=705s

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useGSAP(() => {
    const lenis = new Lenis({
      smooth: true,
    });
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Content />
        <Slider />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
