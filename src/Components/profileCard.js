import { NavLink } from "react-router-dom";
import "./components.css";

export default function ProfileCard({ name, id }) {
    return <NavLink to={"/chatapp/"+ name + "/" + id} >
        <div className="profileCard">
            <img src="/images/profilePicture.png" alt="profile" width="35px" />
            <div className="profileData">
                <div>
                    {name}
                </div>
                <div className="networkStatus">
                    online
                </div>
            </div>
        </div>
    </NavLink >
}