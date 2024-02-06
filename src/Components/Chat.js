import { useNavigate, useParams, Link } from "react-router-dom";

export default function Chat() {
    const navigate = useNavigate();
    const { name, userId } = useParams()

    function handleMessageSent() {
    }

    function handleBack() {
        navigate("/chatapp")
    }

    return <>
        <div className="friendCard">
            <i className='fa-solid fa-arrow-left back' onClick={handleBack} />
            <Link to={"/chatapp/" + name + "/" + userId} >
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
            </Link>
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