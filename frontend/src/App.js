import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";

const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <main>
                {/* <LandingPage></LandingPage> */}
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage></LandingPage>}
                    ></Route>
                    <Route
                        path="/myNotes"
                        element={<MyNotes></MyNotes>}
                    ></Route>
                </Routes>
            </main>

            <Footer></Footer>
        </BrowserRouter>
    );
};

export default App;
