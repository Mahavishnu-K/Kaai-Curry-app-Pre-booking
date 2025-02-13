import React from "react";
import foodring from '../../assets/about.png';
import './about.css';


function About(){
    return(
        <>
            <div className="about-container">
                <div className="about-img">
                    <img src={foodring} className="foodring" alt="food ring" />
                </div>
                <div className="about-us">
                    <div className="about-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-para">
                        <p>At Kaai Curry, we are passionate about making healthy eating effortless and accessible. Our mission is to provide nutritious, chef-crafted meal plans tailored to busy students, working professionals, and health-conscious individuals, including those managing diabetes.</p>
                        <p>We understand the challenges of maintaining a balanced diet in today’s fast-paced world. That’s why our team of expert dietitians and chefs has designed meal plans that prioritize health, taste, and convenience.</p>
                        <p>Every meal is carefully curated using fresh, natural ingredients, with no preservatives or artificial flavors, ensuring you get only the best for your body.</p>
                        <p>Whether you’re a student needing energy-packed meals, a working professional seeking hassle-free nutrition, or someone looking for diabetes-friendly options, Kaai Curry has the perfect plan for you.</p>
                        <p>With affordable pricing, customizable options, and a commitment to wellness, we make it easy to stay on track with your health goals—one delicious meal at a time.</p>
                    </div>
                    <div className="about-credit">
                            <h3>Kaai Curry – Your Health, Our Priority!</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;