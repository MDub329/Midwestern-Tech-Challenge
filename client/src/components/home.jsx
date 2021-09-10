import React from "react";
import logo from "../assests/midwesternLogo.png";
import talkie from "../assests/Talkie.png";
import rabbit from "../assests/Rabbit.png";
import shield from "../assests/Shield.png";

const initialList1 = [
    'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'
]
const initialList2 = [
    'Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles'
]

let finalList;
let isPuzzleComplete = false;

function Home() {
    const [data, setData] = React.useState(null);
    const [list, setList] = React.useState(finalList);
    React.useEffect(() => {
        fetch("/HeaderInfo")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    function handleFooterClick() {
        finalList = [];
        if (!isPuzzleComplete) {
            finalList = initialList1.concat(initialList2).unique();
            setList(finalList);
            isPuzzleComplete = true;
        } else {
            alert("Puzzle has already been solved!")
        }
    }

    Array.prototype.unique = function () {
        var a = this.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    };

    const obj = JSON.parse(data);
    return (
        <div>
            <link rel="stylesheet" href="/css/home.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <div className="header">
                <img src={logo} alt="logo" />
                <a href='/contact'>contact</a>
            </div >
            <div class="contentBoxes">
                <div class="column">
                    <div class="columnImg"><img src={talkie} alt="talkie" /></div>
                    <h1>{!data ? "Loading..." : obj[0].HeaderTitle}</h1>
                    <p>{!data ? "Loading..." : obj[0].Content}</p>
                    <button class="button">Learn More</button>
                </div>
                <div class="column">
                    <div class="columnImg">
                        <span class="helper"></span>
                        <img src={rabbit} alt="rabbit" />
                    </div>
                    <h1>{!data ? "Loading..." : obj[1].HeaderTitle}</h1>
                    <p>{!data ? "Loading..." : obj[1].Content}</p>
                    <button class="button">Learn More</button>
                </div>
                <div class="column">
                    <div class="columnImg">
                        <span class="helper"></span>
                        <img src={shield} alt="shield" />
                    </div>
                    <h1>{!data ? "Loading..." : obj[2].HeaderTitle}</h1>
                    <p>{!data ? "Loading..." : obj[2].Content}</p>
                    <button class="button">Learn More</button>
                </div>
            </div>
            <div class="footer">
                <h1><span class="firstWord">Heading</span> One</h1>
                <p>Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when<button onClick={handleFooterClick} id='footerLink'>this link</button>is clicked.  If the operation has been completed already notify the user that this has already been done</p>
                <ul id='jsPuzzleList'></ul>
            </div>
            {!finalList ? "" :
                <ul>
                    {list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>}

            <script src="/js/home.js"></script>
        </div>
    );
}

export default Home;