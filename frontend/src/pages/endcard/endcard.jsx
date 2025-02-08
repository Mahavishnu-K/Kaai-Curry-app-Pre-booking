import React, { useState, useEffect } from "react";
import city from '../../assets/chennai1.png';
import './endcard.css';

function Endcard() {
    const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

    useEffect(() => {
        const hasPlayed = localStorage.getItem("endcardAnimationPlayed");

        if (!hasPlayed) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setHasPlayedAnimation(true);
                        localStorage.setItem("endcardAnimationPlayed", "true");
                    }
                },
                { threshold: 0.7 } 
            );

            const target = document.getElementById("endcard");
            if (target) observer.observe(target);

            return () => observer.disconnect(); 
        }
    }, []);

    return (
        <div className="endcard" id="endcard">
            <div className="credit">
                <div className="credit-text">
                    <p className={`korker1 ${hasPlayedAnimation ? "animate" : ""}`}>Coming</p>
                    <p className={`soon ${hasPlayedAnimation ? "animate" : ""}`}>
                        Soon 
                        <span style={{ fontFamily: "Kolker Brush", marginLeft: "-5px", fontSize: "5rem" }}>@</span>
                    </p>
                    <p className={`korker2 ${hasPlayedAnimation ? "animate" : ""}`}>Chennai</p>
                </div>
            </div>
            <div className="chennai-city">
                <img src={city} className={`chennai ${hasPlayedAnimation ? "animate" : ""}`} alt="chennai city" />
            </div>
        </div>
    );
}

export default Endcard;
