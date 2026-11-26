import reactLogo from "../../../assets/React.png";

const Header = function () {
    return (
        <>
            <header className="flex justify-between items-center bg-gray-800 text-cyan-300 px-6 py-4">
                <div className="flex items-center gap-1">
                    <img className="w-8 h-8" src={reactLogo} alt="react logo" />
                    <span className="font-semibold text-xl">ReactFacts</span>
                </div>
                <nav className="flex cursor-pointer">
                    <ul className="flex items-center gap-6 list-none">
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
