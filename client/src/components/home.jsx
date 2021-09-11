import React from "react";

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
            .then((data) => {
                if (data.success) {
                    setData(data.message);
                } else {
                    alert('Get Data Failed. Reason: ' + data.error);
                }
            })
    }, []);

    function handleFooterClick() {
        finalList = [];
        if (!isPuzzleComplete) {
            finalList = arrayUnique(initialList1.concat(initialList2));
            setList(finalList);
            isPuzzleComplete = true;
        } else {
            alert("Puzzle has already been solved!");
        }
    }

    function arrayUnique(array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }

    const obj = JSON.parse(data);
    return (
        <div>
            <link rel="stylesheet" href="/css/home.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <div class="header">
                <div class="line"></div>
                <img src={process.env.PUBLIC_URL + '/assests/midwesternLogo.png'} alt="logo" />
                <a href='/contact'>contact</a>
            </div >
            <div class="contentBoxes">
                <div class="column">
                    <div class="columnLine"></div>
                    <div class="columnImg">
                        <span class="helper"></span>
                        {!data ? "" : <img src={!data ? "" : process.env.PUBLIC_URL + '/assests/' + obj[0].url} alt="talkie" />}
                    </div>
                    <h1>{!data ? "Loading..." : obj[0].header_title}</h1>
                    <p>{!data ? "Loading..." : obj[0].content}</p>
                    <button class="button">Learn More</button>
                </div>
                <div class="column">
                    <div class="columnLine"></div>
                    <div class="columnImg">
                        <span class="helper"></span>
                        {!data ? "" : <img src={!data ? "" : process.env.PUBLIC_URL + '/assests/' + obj[1].url} alt="talkie" />}
                    </div>
                    <h1>{!data ? "Loading..." : obj[1].header_title}</h1>
                    <p>{!data ? "Loading..." : obj[1].content}</p>
                    <button class="button">Learn More</button>
                </div>
                <div class="column">
                    <div class="columnLine"></div>
                    <div class="columnImg">
                        <span class="helper"></span>
                        {!data ? "" : <img src={!data ? "" : process.env.PUBLIC_URL + '/assests/' + obj[2].url} alt="talkie" />}
                    </div>
                    <h1>{!data ? "Loading..." : obj[2].header_title}</h1>
                    <p>{!data ? "Loading..." : obj[2].content}</p>
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