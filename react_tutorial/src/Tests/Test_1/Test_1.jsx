import reactLogo from "../../assets/React.png";
import mainLogo from "../../assets/React.svg";

const Test_1 = function () {
    return (
        <div className="container">
            <header>
                <img className="logo" src={reactLogo} alt="react logo" />
                <span>ReactFacts</span>
            </header>
            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile
                        apps
                    </li>
                </ul>

                <img className="bodyLogo" src={mainLogo} alt="React Logo" />
            </main>
        </div>
    );
};

export default Test_1;
