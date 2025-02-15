import React, { useEffect, useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import './navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    }

    const hideSideBar = () => {
        setSidebarVisible(false);
    }

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
                    <li className="hideOnMobile">
                        <NavLink smooth to="/#home" className={`hideOnMobile-item ${activeSection === "home" ? "active" : ""}`}>
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li className="hideOnMobile">
                        <NavLink smooth to="/#about" className={`hideOnMobile-item ${activeSection === "about" ? "active" : ""}`}>
                            <p>About</p>
                        </NavLink>
                    </li>
                    <li className="hideOnMobile">
                        <NavLink smooth to="/#membership" className={`hideOnMobile-item ${activeSection === "membership" ? "active" : ""}`}>
                            <p>Plans</p>
                        </NavLink>
                    </li>
                    <li className="hideOnMobile">
                        <NavLink smooth to="/#endcard" className={`hideOnMobile-item ${activeSection === "endcard" ? "active" : ""}`}>
                            <p>Stay Tuned</p>
                        </NavLink>
                    </li>
                    <li onClick={showSidebar} className="nav-item-ham">
                        <NavLink smooth to="" className="item-link">
                            <RxHamburgerMenu size={24}/>
                        </NavLink>
                    </li>
                </ul>


                <ul className={`nav-menu-sidebar ${sidebarVisible ? "visible" : ""}`}>
                    <li onClick={hideSideBar} className="nav-item">
                        <NavLink smooth to="" className="item-link">
                            <RxCross1 size={24}/>
                        </NavLink>
                    </li>
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
