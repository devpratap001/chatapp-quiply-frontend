import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "./profileCard";

export default function Chat() {
    const {user} = useParams();
    const navigate= useNavigate();
    
    function handleMessageSent() {
    }

    function handleBack () {
        navigate("/chatapp")
    }

    return <>
        <div className="friendCard">
            <i className='fa-solid fa-arrow-left back' onClick={handleBack} />
            <ProfileCard Name={user} />
            <div className="calling">
                <i className="fa-solid fa-phone" />
                <i className="fa-solid fa-video" />
            </div>
        </div>
        <div className="chat">
            <div className="chatRoom hidescroll">
                <div className="incoming">Hii dear this is dev pratap</div>
                <div className="outgoing">Hii dear this is dev pratap</div>
            </div>
            <div className="chatForm">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleMessageSent()
                }}>
                    <input type="text" className="typemessage" placeholder="Type your message here." />
                    <input type="submit" className="sendmessage" value="Send" />
                </form>
            </div>
        </div>
    </>
}