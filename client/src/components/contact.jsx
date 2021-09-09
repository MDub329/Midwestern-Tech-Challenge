import React from "react";
import logo from "../assests/midwesternLogo.png";

function Contact() {
    return (
        <div className="contact">
            <link rel="stylesheet" href="/css/contact.css" />
            <div class="content">
                <div id="background"></div>
                <div>
                    <img src={logo} alt="logo" />
                    <a href='/'>Home</a>
                </div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">Contact</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;