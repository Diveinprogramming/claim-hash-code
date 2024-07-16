import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import rectangleImage from '../Rectangle2.png'; // Adjusted path

const ClaimCode = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const handleChange = (e) => {
        setCode(e.target.value); // Update state with input value
    };

    const handleNavigate = () => {
        if (code.trim() === "") {
            alert("Please enter your Claim Number."); // Alert for empty input
            return;
        }
        
        if (code === "123456") {
            navigate("/connect-wallet");
        } else {
            navigate("/error");
        }
    };

    return (
        <>
            <div className='manual-entry mb-10'>
                <h3 className="QRcode-heading">Let's see what you have won!</h3>
                <div>
                    <img src={rectangleImage} alt="QR code" />
                </div>
                <label className='mt-10'>Enter your Claim Number</label>
                <input 
                    type="text" 
                    placeholder='35rt532' 
                    onChange={handleChange} 
                    className="input" 
                    name="code"
                />
                <button className="red-btn mt-10" onClick={handleNavigate}>Claim</button>
            </div>
        </>
    );
};

export default ClaimCode;
