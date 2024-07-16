import { useNavigate } from "react-router-dom";
const Choose=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=(url)=>{
        navigate(`/${url}`);
    }
    return(<>
    <div className="choose-wrap">
        <h3 className="heading-choose">Choose</h3>
        <div className="box-wrap">
            <div className="row-1">
            <div className="box" onClick={()=>handelNavigate("upload-code")}>
                <b>Upload Codes</b>
            </div>
            <div className="box"  onClick={()=>handelNavigate("download-code")}>
                <b>Download Coades</b>
            </div>
            <div className="box" onClick={()=>handelNavigate("editAdd-product")}>
                <b>Edit Product</b>
            </div>
            </div>
        
           
           <div className="row-2">
           <div className="box" onClick={()=>handelNavigate("reward-configuration")}>
                <b>Reward Configuration</b>
            </div>
            <div className="box" onClick={()=>handelNavigate("Admin")}>
                <b>Log Out</b>
            </div>

           </div>
           
            
        </div>

    </div>
    </>)
}
export default Choose;