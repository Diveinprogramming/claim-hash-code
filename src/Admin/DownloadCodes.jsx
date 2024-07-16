import { useNavigate } from "react-router-dom";


const  DownloadCodes=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/choose");
    }
return(<>
   <div className="UploadCodes-wrap">
        <h3 className="heading">Download Codes</h3>
        <div className="login-input-wrap mt-10">
            <label>Select Download Location / Name</label>
            
            <input type="file" className="input" placeholder="//x.csv" name="email"/>
            
            
            <label>Select Product</label>
            
            <select className="input">
               <option>Select Product1</option>
               <option>Select Product2</option>
            </select>
          
          
           
        </div>
 
        <button className="red-btn" >Download</button> 
          <button className="red-btn" onClick={handelNavigate}>Cancel</button>
    </div>
</>)
}

export default DownloadCodes;