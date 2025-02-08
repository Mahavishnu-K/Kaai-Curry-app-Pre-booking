import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
import plate from '../../assets/dishplate.png';
import ring from '../../assets/ring.png';
import circle from '../../assets/circle.png';
import corr1 from '../../assets/veg/corr1.png';
import cucumber from '../../assets/veg/cucumber.png';
import corr2 from '../../assets/veg/corr2.png';
import capsicum from '../../assets/veg/capsicum.png';
import capsicum2 from '../../assets/veg/capsicum2.png';
import cabbage1 from '../../assets/veg/cabbage1.png';
import cabbage2 from '../../assets/veg/cabbage2.png';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/prebookform');
    };

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>1-Day Meal Deal <br/>
                            Pre-Book & Save 50%!
                        </h2>
                        <p>Enjoy freshly prepared meals delivered on time—skip the<br/>wait, save big, and pre-book now for a limited-time 50%<br/>discount!</p>
                    </div>
                    <div className="hero-button">
                        <button className="hero-btn" onClick={handleClick}>Pre-Book & Save!</button>
                    </div>
                </div>
                <img src={ring} className="ring" alt="shape image" />
                <img src={circle} className="circle" alt="shape image" />
                <div className="hero-img">
                    <img src={capsicum} className='capsicum' alt="vegie image" />
                    <img src={cabbage2} className='cabbage2' alt="vegie image" />
                    <img src={cabbage1} className='cabbage1' alt="vegie image" />
                    <img src={cucumber} className='cucumber' alt="vegie image" />
                    <img src={corr1} className='corr1' alt="vegie image" />
                    <img src={capsicum2} className='capsicum2' alt="vegie image" />
                    <img src={corr2} className='corr2' alt="vegie image" />

                    <img src={plate} className='plate-img' alt="plate image" />
                </div>
            </div>
        </>
    )
}

export default Home;