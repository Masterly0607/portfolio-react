import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect, useCallback } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef(null);
  const lastYRef = useRef(0);
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  const floatingNavToggleHandler = useCallback(() => {
    if (!mainRef.current) return;

    const currentY = mainRef.current.getBoundingClientRect().y;

    if (Math.abs(lastYRef.current - currentY) > 20) {
      setShowFloatingNav(true);
    } else {
      setShowFloatingNav(false);
    }

    lastYRef.current = currentY;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(intervalId);
  }, [floatingNavToggleHandler]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
