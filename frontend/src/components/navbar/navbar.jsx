import React, { useEffect, useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="header">
            <div className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink smooth to="/#home" className={`item-link ${activeSection === "home" ? "active" : ""}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink smooth to="/#about" className={`item-link ${activeSection === "about" ? "active" : ""}`}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink smooth to="/#membership" className={`item-link ${activeSection === "membership" ? "active" : ""}`}>
                            Plans
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink smooth to="/#endcard" className={`item-link ${activeSection === "endcard" ? "active" : ""}`}>
                            Stay Tuned
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
