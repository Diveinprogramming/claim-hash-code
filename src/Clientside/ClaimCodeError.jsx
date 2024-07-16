
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import error from '../Rectangle5.png'; // Adjusted path

const ClaimCodeError = () => {
    const navigate=useNavigate();
    
    const [code, setCode] = useState("");

    const handleChange = (e) => {
        setCode(e.target.value); // Update state with input value
    };

    const handleNavigate = () => {
        if (code.trim() === "") {
            alert("Please enter your Claim Number."); 
            return;
        }
        
        if (code === "123456") {
            navigate("/connect-wallet");
        } else {
            alert("Please enter correct your Claim Number. (123456)"); 
        }
    };
    return (
        <>
            <div className='manual-entry mb-10'>
                <h3 className="QRcode-heading mb-10">Looks like its the wrong code or already claimed! 
              
                </h3>
                <div>
                    <img src={error} alt="" />
                </div>
                <label className='mt-10 '>Enter your Claim Number</label>
                <input type="text" placeholder='356 Tokens' onChange={handleChange} className="input-error mt-10" name="code"/>
              
                <button className="red-btn mt-10" onClick={handleNavigate}>Try Again</button>
            
            </div>
        </>
    );
};

export default ClaimCodeError;
