import { NavLink } from "react-router-dom";
import "./components.css";

export default function ProfileCard({ Name }) {
    return <NavLink to={Name} >
        <div className="profileCard">
            <img src="/images/profilePicture.png" alt="profile" width="35px" />
            <div className="profileData">
                <div>
                    {Name}
                </div>
                <div className="networkStatus">
                    online
                </div>
            </div>
        </div>
    </NavLink >
}