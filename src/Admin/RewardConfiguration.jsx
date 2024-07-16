import { useNavigate } from "react-router-dom";


const RewardConfiguration=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/choose");
    }
return(<>
   <div className="UploadCodes-wrap">
        <h3 className="heading">Reward Configuration</h3>
        <div className="login-input-wrap">
            <label>Select Product key</label>
            <select className="input">
               <option>Hello Product 1</option>
               <option>Select Product2</option>
            </select>
            
            
            <label>Select Low Token Value</label>
            
            <select className="input">
               <option>1</option>
               <option>2</option>
            </select>
            <label>Select High Token Value</label>
            
            <select className="input">
               <option>500</option>
               <option>2</option>
            </select>
            <label>  Token to reward wallet</label>
            <input type="text" className="input" placeholder="45FEa353432ecc" name="id"/>
          
          
          
           
        </div>
 
        <button className="red-btn" >Download</button> 
          <button className="red-btn" onClick={handelNavigate}>Cancel</button>
    </div>
</>)
}

export default RewardConfiguration;