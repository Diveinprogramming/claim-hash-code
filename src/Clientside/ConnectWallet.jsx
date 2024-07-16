import React from 'react';
import { useNavigate } from "react-router-dom";
import rectangleImage from '../Rectangle3.png'; // Adjusted path

const ConnectWallet = () => {
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/congratulations");
    }
    return (
        <>
            <div className='manual-entry mb-10'>
                <h3 className="QRcode-heading">Connect your wallet</h3>
                <div>
                    <img src={rectangleImage} alt="QR code" />
                </div>
                <button className="red-btn mt-10" onClick={handelNavigate}>Connect to Wallet</button>
            
            </div>
        </>
    );
};

export default ConnectWallet;
