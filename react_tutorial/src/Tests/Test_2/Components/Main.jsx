import mainLogo from "../../../assets/React.svg";

const Main = function () {
    return (
        <>
            <main className="bg-gray-700 flex flex-col text-gray-300 p-8 relative overflow-hidden">
                <h1 className="text-white text-3xl font-bold mt-4">
                    Fun facts about React
                </h1>
                <ul className="flex flex-col gap-2 mt-6 list-disc marker:text-cyan-300 pl-6">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile
                        apps
                    </li>
                </ul>

                <img className="absolute w-62 h-62 -right-32 -bottom-10 opacity-10" src={mainLogo} alt="React Logo" />
            </main>
        </>
    );
};

export default Main;
