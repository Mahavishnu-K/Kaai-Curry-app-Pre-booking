import React, { useState } from "react";
import { db } from "../../../../backend/src/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore"; 
import formpic from '../../assets/formdecor.png';
import './form.css';

function PreBookForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        packageType: "",
        plan: "",
        address: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "preBookings"), formData);
            alert("Form submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                packageType: "",
                plan: "",
                address: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }

        setLoading(false);
    };

    return (
        <>
            <div className="form-body">
                <div className="form-container">
                    <div className="form-box">
                        <h2>Pre-Booking Form</h2>
                        <p className="subtitle">Get Started on your wellness today!</p>

                        <form onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />

                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" required />

                            <label>Phone Number</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your Phone Number" required />

                            <div className="dropdown-container">
                                <div>
                                    <label>Package Type</label>
                                    <select name="packageType" value={formData.packageType} onChange={handleChange} required>
                                        <option value="" disabled hidden>Select your package</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Plan</label>
                                    <select name="plan" value={formData.plan} onChange={handleChange} required>
                                        <option value="" disabled hidden>Select your plan</option>
                                        <option value="starter">Starter</option>
                                        <option value="premium">Premium</option>
                                        <option value="royal">Royal</option>
                                        <option value="patient">Patient</option>
                                    </select>
                                </div>
                            </div>

                            <label>Address</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter your Address" required></textarea>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="form-image">
                    <img src={formpic} className="pic" alt="Form picture" />
                </div>
            </div>
        </>
    );
}

export default PreBookForm;
