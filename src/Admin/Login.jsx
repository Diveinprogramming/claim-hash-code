import { useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate=useNavigate();
    
    const handelNavigate=()=>{
        navigate("/choose");
    }
    return(<>
    <div className="login-wrap">
        <h3 className="heading">Login</h3>
        <div className="login-input-wrap">
            <label>User Name</label>
            <input type="text" className="input" name="email"/>
            <label>Password</label>
            <input type="password" className="input" name="email"/>
           
        </div>
        <button className="red-btn" onClick={handelNavigate}>Enter</button>
    </div>
    </>)
}
export default Login;