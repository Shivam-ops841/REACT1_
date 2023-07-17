import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-syn.png"
                    alt="code-syn-logo"
                />
                <h4 className="mainLabel">Kindly Paste your Room ID Here</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM Identifiaction NO."
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Name Of User"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join/Create
                    </button>
                    <span className="createInfo">
                       CLick on the right to click new room
                        <a
                            onClick={createNewRoom}
                            className="createNewBtn"
                        >
                            Click Me
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with React And Node By Shivam Chawla
                    <a href="https://github.com/ " color='rgba(192, 192, 192, 0.685)'>My Repository</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
