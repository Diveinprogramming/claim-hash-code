import React from 'react';
import { useNavigate } from "react-router-dom";
import rectangleImage from '../Rectangle4.png'; // Adjusted path

const CongratulationsConnect = () => {
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/claim-code");
    }
    return (
        <>
            <div className='manual-entry mb-10'>
                <h3 className="QRcode-heading">Congratulations! 
                </h3>
                <div>
                    <img src={rectangleImage} alt="QR code" />
                </div>
                <input type="text" placeholder='356 Tokens' className="input-congratulations mt-10" name="code"/>
                <label className='mt-10 '>Added to your wallet</label>
                <button className="red-btn mt-10" onClick={handelNavigate}>Close</button>
            
            </div>
        </>
    );
};

export default CongratulationsConnect;
