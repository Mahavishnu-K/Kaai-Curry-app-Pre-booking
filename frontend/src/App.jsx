import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Membership from './pages/membership/membership';
import Endcard from './pages/endcard/endcard';
import PreBookForm from './pages/form/form';
import Footer from './components/footer/footer';
import './App.css';

function AppContent() {
  const location = useLocation();
  const lastScrollTop = useRef(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.localStorage.removeItem("endcardAnimationPlayed");
    window.location.hash = "";
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
      if (isScrolling) return;
      const sections = document.querySelectorAll('section');
      if (scrollTimeout) clearTimeout(scrollTimeout);

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        window.history.replaceState(null, null, `#${currentSection}`); 
      }
  

      scrollTimeout = setTimeout(() => {
        let currentScroll = window.scrollY;
        let scrollingDown = currentScroll > lastScrollTop.current;
        lastScrollTop.current = currentScroll;

        let maxVisibleSection = null;
        let maxVisibleHeight = 0;
        let targetSection = null;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleSection = section;
          }
        });

        const footer = document.querySelector('#footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            setIsScrolling(false); 
            return;
          }
        }

        if (maxVisibleSection && maxVisibleHeight >= window.innerHeight * 0.7) {
          setIsScrolling(true);
          maxVisibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => setIsScrolling(false), 700);
          return;
        }

        if (scrollingDown) {
          for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top > 10) {
              targetSection = sections[i];
              break;
            }
          }
        } else {
          for (let i = sections.length - 1; i >= 0; i--) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top < -10) {
              targetSection = sections[i];
              break;
            }
          }
        }

        if (targetSection) {
          setIsScrolling(true);
          requestAnimationFrame(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => setIsScrolling(false), 700);
          });
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <>
      {location.pathname !== "/prebookform" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="membership"><Membership /></section>
              <section id="endcard"><Endcard /></section>
              <section id="footer"><Footer /></section>
            </>
          }
        />
        <Route path="/prebookform" element={<PreBookForm />} />
      </Routes>
      
      
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
