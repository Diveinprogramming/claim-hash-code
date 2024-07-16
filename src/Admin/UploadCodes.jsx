import { useNavigate } from "react-router-dom";


const UploadCodes=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/choose");
    }
return(<>
   <div className="UploadCodes-wrap">
        <h3 className="heading">Download Codes</h3>
        <div className="login-input-wrap mt-10">
            <label>Select File</label>

            <input type="text" readOnly className="input" name="file"  placeholder="//x.csv" />
           
            
            
            <label>Select Product</label>
            
            <select className="input">
               <option>hello Product 1</option>
               <option>hello Product 2</option>
            </select>
          
          
           
        </div>
        <div className="row">  <button className="small-red-btn" >Overwrite</button>   <button className="small-red-btn"  >Add</button></div>
        <button className="red-btn" onClick={handelNavigate}>Cancel</button>
    </div>
</>)
}
export default UploadCodes;