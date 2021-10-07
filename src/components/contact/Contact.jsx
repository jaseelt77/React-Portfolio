import React, { useState } from 'react'
import "./contact.scss";


export default function Contact() {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="hidden" name="form-name" value="contact" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {message && <span>Thanks, I'll Reply Back ASAP :)</span>}
                </form>
            </div>
            
        </div>
    )
}
