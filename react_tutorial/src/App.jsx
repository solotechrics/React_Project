import { useState } from "react";
// import Test_1 from "./Tests/Test_1/Test_1";
import Test_2 from "./Tests/Test_2/Test_2";
import Header from "./Tests/Test_2/Components/Header";
import Main from "./Tests/Test_2/Components/Main";
import Footer from "./Tests/Test_2/Components/Footer";

function App() {
    return (
        <>
            <Header />
            <Test_2 />
            <Main />
            <Footer />
        </>
    );
}

export default App;
