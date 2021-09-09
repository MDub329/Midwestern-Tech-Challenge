import React from "react";
import logo from "../assests/midwesternLogo.png";
import talkie from "../assests/Talkie.png";
import rabbit from "../assests/Rabbit.png";
import shield from "../assests/Shield.png";

function Home() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/HeaderInfo")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (
        <div>
            <link rel="stylesheet" href="/css/home.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <div className="header">
                <img src={logo} alt="logo" />
                <a href='/contact'>Contact</a>
            </div >
            <div class="contentBoxes">
                <div class="column">
                    <div class="columnImg"><img src={talkie} alt="talkie" /></div>
                    <h1>Heading two</h1>
                    <p>{!data ? "Loading..." : data}</p>
                </div>
                <div class="column">
                    <div class="columnImg">
                        <span class="helper"></span>
                        <img src={rabbit} alt="rabbit" />
                    </div>
                    <h1>Heading two</h1>
                    <p>{!data ? "Loading..." : data}</p>
                </div>
                <div class="column">
                    <div class="columnImg">
                        <span class="helper"></span>
                        <img src={shield} alt="shield" />
                    </div>
                    <h1>Heading two</h1>
                    <p>{!data ? "Loading..." : data}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;