import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link, useOutletContext } from "react-router-dom";
import { io } from "socket.io-client";

export default function Chat() {
    const {_id}= useOutletContext();
    const navigate = useNavigate();
    const { name, userId } = useParams()
    const [typedMessage, setTypedMessage] = useState("");
    const [messageList, setMessageList]= useState([]);
    const [socketInstance, setSocketInstance]= useState(null);
    const chatbox= useRef(null)

    useLayoutEffect(() => {
        const socket= io("http://localhost:5000", {withCredentials: true,  auth:{myId: _id, contactId: userId}});
        socket.data= {myId: _id, contactId: userId};
        setSocketInstance(socket);

        socket.on("sent_message_server", data => {
            setMessageList(prevList => [...prevList, {...data}])
        })

        return () => {
            socket.disconnect();
        }
    }, [name, userId, _id])

    useEffect(() => {
        async function fetchMessages(){
            try {
                const response= await fetch("http://localhost:5000/chatapp/getmessages/"+ _id + "/" + userId);
                const responseData= await response.json();
                // manipulate responseData to get array of messages and print in chatbox 
                const sortedResponse= responseData.sort(function (a, b){
                    const b1= new Date(b.date);
                    const a1= new Date(a.date);
                    return a1 - b1
                })
                setMessageList(sortedResponse);
            } catch (error) {
                console.error(error)
            }
        }
        if (_id){
            fetchMessages();
        }
    },[_id, userId])

    useEffect(() => {
        chatbox.current.scrollTop= chatbox.current.scrollHeight;
    },[messageList, chatbox])

    function handleMessageSent() {
        socketInstance.emit("sent_message", {message:typedMessage, date: new Date(Date.now())})
        setMessageList(prevList => [...prevList, {classType: "outgoing", message: typedMessage, date: new Date(Date.now())}]);
        setTypedMessage("");
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
            <div className="chatRoom hidescroll" ref={chatbox}>
                {messageList.map((elem, index) => {
                    return <div className={elem.classType} key={index} >
                        {elem.message}
                        <div className="timestamp">{new Date(elem.date).getHours() + ":" + new Date(elem.date).getMinutes() + ":" + new Date(elem.date).getSeconds()}</div>
                    </div>
                })}
            </div>
            <div className="chatForm">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleMessageSent()
                }}>
                    <input value={typedMessage} onChange={(e) => {setTypedMessage(e.target.value)}} type="text" className="typemessage" placeholder="Type your message here." required />
                    <input type="submit" className="sendmessage" value="Send" />
                </form>
            </div>
        </div>
    </>
}