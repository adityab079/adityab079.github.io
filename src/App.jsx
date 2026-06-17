import { useEffect, useRef, useState } from "react";
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import WOW from "wowjs";

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["certifications", "Certifications"],
  ["contacts", "Contact"],
];

const particlesConfig = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6bccef" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: false,
      anim: { enable: false, speed: 30, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const navHeight = document.getElementById("navv")?.offsetHeight ?? 0;
      const current = [...sections]
        .reverse()
        .find(
          (section) => section.offsetTop < window.scrollY + 150 + navHeight,
        );
      setActiveSection(current?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const navigateTo = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="navv" className="nav-wrap fixed-top">
      <button
        className={`toggle-nav js-nav${isOpen ? " animate" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="bar" style={{ marginTop: "50%" }} />
        <span className="bar" />
        <span className="bar" />
      </button>
      <nav className={`menu${isOpen ? " active" : ""}`}>
        <ul>
          {navItems.map(([id, label]) => (
            <li className={activeSection === id ? "current" : ""} key={id}>
              <a href={`#${id}`} onClick={(e) => navigateTo(e, id)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1ijp_Bsp1eaeKWW42GDvVf59cG70WbaoA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  const particlesInitialized = useRef(false);

  useEffect(() => {
    document.getElementById("profile-img")?.classList.add("animated", "fadeIn");

    document
      .querySelector("span.name")
      ?.parentElement?.classList.add("animated", "fadeInLeft");

    document
      .querySelector("span.title")
      ?.parentElement?.classList.add("animated", "fadeInRight");

    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.style.visibility = "visible";

          entry.target.classList.add(
            "animated",
            entry.target.dataset.animation,
          );

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll(".wow");

    animatedElements.forEach((element) => {
      element.style.visibility = "hidden";

      const animationClass = [
        "fadeIn",
        "fadeInLeft",
        "fadeInRight",
        "bounceInLeft",
        "bounceInRight",
        "slideInLeft",
        "slideInRight",
        "zoomIn",
      ].find((c) => element.classList.contains(c));

      if (animationClass) {
        element.classList.remove(animationClass);
        element.dataset.animation = animationClass;
      }

      animationObserver.observe(element);
    });

    let retryTimer;

    const initializeParticles = () => {
      if (!particlesInitialized.current && window.particlesJS) {
        window.particlesJS("particles-js", particlesConfig);
        particlesInitialized.current = true;
      }

      if (retryTimer && particlesInitialized.current) {
        window.clearInterval(retryTimer);
      }
    };

    initializeParticles();
    window.addEventListener("load", initializeParticles);
    retryTimer = window.setInterval(initializeParticles, 100);

    const retryTimeout = window.setTimeout(
      () => window.clearInterval(retryTimer),
      10000,
    );

    return () => {
      animationObserver.disconnect();
      window.removeEventListener("load", initializeParticles);
      window.clearInterval(retryTimer);
      window.clearTimeout(retryTimeout);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
