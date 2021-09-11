import React from "react";

function Contact() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/HeaderInfo")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setData(data.message);
                } else {
                    alert('Get Data Failed. Reason: ' + data.error);
                }
            })
    }, []);
    const obj = JSON.parse(data);

    function submitContactForm(e) {
        e.preventDefault();
        //Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: e.target.fname.value,
                last_name: e.target.lname.value,
                title: e.target.title.value,
                email: e.target.email.value,
                message: e.target.message.value,
            })
        };
        fetch('/ContactInfo', requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData.success) {
                    alert('Success!');
                } else {
                    alert('Post Failed. Reason: ' + responseData.error);
                }
            });

    }

    return (
        <div className="contact">
            <div id="content">
                <link rel="stylesheet" href="/css/contact.css" />
                <div class="header">
                    <div class="topLine"></div>
                    <img src={process.env.PUBLIC_URL + '/assests/midwesternLogo.png'} alt="logo" />
                    <a href='/'>home</a>
                </div >
                <div class='leftHeader'>

                    <h1><span class="firstWord">Heading</span> One</h1>
                    <p>{!data ? "Loading..." : obj[0].content}</p>
                    <p>{!data ? "Loading..." : obj[1].content}</p>
                </div>
                <div class='rightHeader'>
                    <h2>Heading Two</h2>
                    <div class="line"></div>
                    <form class='contactForm' onSubmit={submitContactForm}>
                        <input type="text" id="fname" name="fname" placeholder="First Name" />
                        <input type="text" id="lname" name="lname" placeholder="Last Name" />
                        <input type="text" id="title" name="title" placeholder="Title" />
                        <input type="text" id="email" name="email" placeholder="Email" />
                        <textarea type="text" id="message" name="message" placeholder="Message" />
                        <div class="buttonHolder">
                            <input type="submit" class="button" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;