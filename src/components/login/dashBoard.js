import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { NavItem } from "reactstrap";
const Dashboard = () => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     const checkuser = () => {
    //         if(!localStorage.getItem("username"))
    //         navigate("/")
    //     }
    //     checkuser()
    // },[])
    const handleSubmit = () => {
        localStorage.removeItem("username")
        navigate("/")
    }
    return(
        <div className="dashboard">
            <h2 style={{marginBottom: "30px"}}>hasnain, ali</h2>
            <button className="signOutBtn" onClick={handleSubmit}>SIGN OUT</button>
        </div>
    )
}
export default Dashboard;