import React from "react";
import logo from "../assests/midwesternLogo.png";

function Contact() {

    function submitContactForm() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('/ContactInfo', requestOptions)
            .then(response => response.json())
            .then(data => ({

            }));
    }

    return (
        <div className="contact">
            <link rel="stylesheet" href="/css/contact.css" />
            <div class="leftColumn">

            </div>
            <div class="rightColumn">

            </div>
        </div>
    );
}

export default Contact;