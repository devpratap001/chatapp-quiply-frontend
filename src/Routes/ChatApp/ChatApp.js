import Dashboard from "../../Components/Dashboard";
import AllUsers from "../../Components/AllUsers";
import "./chatApp.css";
import { Outlet } from "react-router-dom";

export default function ChatApp() {
    return <>
    <Dashboard />
    <div className="chatbox" >
        <Outlet />
    </div>
    <AllUsers />
    </>
}