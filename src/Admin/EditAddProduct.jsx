import { useNavigate } from "react-router-dom";


const EditAddProduct=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/choose");
    }
return(<>
   <div className="UploadCodes-wrap">
        <h3 className="heading">Edit/Add Product</h3>
        <div className="login-input-wrap mt-10">
        <label>Product Key</label>
            
            <input type="text" className="input" placeholder="BB" name="product-key"/>
            
            
            <label>Product description</label>
            
            <input type="text" className="input"  placeholder="Hello Product 1 " name="product-description"/>
            <label>Product wallet ID</label>
            
            <input type="text" className="input" placeholder="3453EWSDD%$#RFEC" name="id"/>
          
          
           
        </div>

        <div className="row">  <button className="small-red-btn" >Edit</button>   <button className="small-red-btn"  >Add</button></div>
        <button className="red-btn" >Update</button>
        <button className="red-btn" onClick={handelNavigate}>Cancel</button>
    </div>
</>)
}

export default EditAddProduct;