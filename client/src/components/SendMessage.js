import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { sendMailPopup } from '../utils/utils';
import "./App.css"

export function SendAutoMessage({ sendTo, setShowDmPopup }) {
    const [message, setMessage] = useState({})
    const handleSendMessage = (e) => {
        setMessage({
            ...message,
            sendTo: sendTo.name,
            sender: (localStorage.getItem('name')),
            [e.target.name]: e.target.value
        })
    }

    const postTODB = () => {
        fetch("http://127.0.0.1:8080/api/addmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    setShowDmPopup(false)
                }
            })
    }

    return (
        <div className='dm-popup'>
                <MdClose className='add-post-close' onClick={() => { setShowDmPopup(false) }} />
                <h2>Send Message to {sendTo.name}</h2>
            <textarea className="textbox" type="text" name="message" onChange={handleSendMessage} placeholder="Message" /><br></br>
            <button className="billButton" onClick={postTODB}>Send Message</button>
        </div>
    )
}

export function SendMessage({ setShowDmPopup }) {
    const [message, setMessage] = useState({})
    const handleSendMessage = (e) => {
        setMessage({
            ...message,
            sender: (localStorage.getItem('name')),
            [e.target.name]: e.target.value
        })
    }

    const postTODB = () => {
        fetch("http://127.0.0.1:8080/api/addmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    setShowDmPopup(false)
                }
            })
    }

    return (
        <div className='dm-popup'>
                <MdClose className='add-post-close' onClick={ sendMailPopup } />
                <input className="textbox" type="text" name="sendTo" onChange={handleSendMessage} placeholder="Send To" />
            <textarea className="textbox" type="text" name="message" onChange={handleSendMessage} placeholder="Message" /><br></br>
            <button className="billButton" onClick={postTODB}>Send Message</button>
        </div>
    )
}