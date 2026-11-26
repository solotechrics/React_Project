import mainLogo from "../../../assets/React.svg";

const Main = function () {
    return (
        <>
            <main className="bg-body flex flex-col text-gray-300 p-8 relative overflow-hidden">
                <h1 className="text-heading text-4xl font-semibold mt-4">
                    Fun facts about React
                </h1>
                <ul className="flex flex-col gap-2 mt-6 list-disc marker:text-disc pl-12 marker:text-2xl text-list text-sm">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile
                        apps
                    </li>
                </ul>

                <img
                    className="absolute w-62 h-62 -right-32 -bottom-1 opacity-10"
                    src={mainLogo}
                    alt="React Logo"
                />
            </main>
        </>
    );
};

export default Main;
