import React from 'react';
import { useNavigate } from "react-router-dom";
import rectangleImage from '../Rectangle.png'; // Adjusted path

const ManualEntry = () => {
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/claim-code");
    }
    return (
        <>
            <div className='manual-entry mb-10'>
                <h3 className="QRcode-heading">Align Camera with QR code</h3>
                <div>
                    <img src={rectangleImage} alt="QR code" />
                </div>
                <button className="red-btn mt-10" onClick={handelNavigate}>Manual Entry</button>
            
            </div>
        </>
    );
};

export default ManualEntry;
