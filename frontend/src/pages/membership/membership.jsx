import React from "react";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './membership.css';

function Membership(){

    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
        name: "Starter",
        description: "Perfect for Students & Young Professionals",
        price: { monthly: 5999, weekly: 1499 },
        features: ["Budget-friendly", "Home-style cooking", "No junkfoods", "High-energy meals"],
        },
        {
        name: "Premium",
        description: "For busy professionals, fitness enthusiasts & health-conscious",
        price: { monthly: 8499, weekly: 1999 },
        features: [
            "Home-style cooking",
            "No junkfoods",
            "High-energy meals",
            "Power-packed meals for a well-balanced diet",
            "Three premium meals daily",
        ],
        },
        {
        name: "Royal",
        description: "For health-focused individuals who require premium, doctor",
        price: { monthly: 12699, weekly: 2999 },
        features: [
            "Home-style cooking",
            "No junkfoods",
            "High-energy meals",
            "Power-packed meals for a well-balanced diet",
            "Three premium meals daily",
            "Doctor-approved, nutrient-rich meals",
        ],
        },
        {
        name: "Patient",
        description: "For individuals with specific health, diabetes, and cardio disease",
        price: { monthly: 15999, weekly: 3999 },
        features: [
            "Home-style cooking",
            "No junkfoods",
            "High-energy meals",
            "Power-packed meals for a well-balanced diet",
            "Three premium meals daily",
            "Expert-designed meals",
            "Personalized meal plans tailored to your needs",
        ],
        highlight: true,
        },
    ];
    return(
        <>
            <div className="pricing-container">
                <div className="price-content">
                    <div className="price-para">
                        <p className="pricing-title">Plans & Pricings</p>
                        <p className="pricing-subtitle">
                            Choose a meal plan that fits your lifestyle. Fresh, nutritious, and delicious meals delivered to your doorstep!
                        </p>
                    </div>

                    <div className="toggle-container">
                        <button
                        className={`toggle-button ${billingCycle === "weekly" ? "active" : ""}`}
                        onClick={() => setBillingCycle("weekly")}
                        >
                        Weekly
                        </button>
                        <button
                        className={`toggle-button ${billingCycle === "monthly" ? "active" : ""}`}
                        onClick={() => setBillingCycle("monthly")}
                        >
                        Monthly
                        </button>
                    </div>

                    <div className="pricing-grid">
                        {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
                            <div className="plan-name">{plan.name}</div>
                            <p className="plan-description">{plan.description}</p>
                            <p className="plan-price">
                            ₹{plan.price[billingCycle].toLocaleString()}
                            </p>
                            <p className="price-cycle">Per {billingCycle === "monthly" ? "Month" : "Week"}</p>
                            <hr />
                            <ul className="features-list">
                            {plan.features.map((feature, i) => (
                                <li key={i}><IoMdCheckmarkCircleOutline className={`tick ${plan.highlight ? "tickhigh" : ""}`}/> {feature}</li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Membership;