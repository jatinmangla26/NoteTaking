import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";

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
                    <Route
                        path="/login"
                        element={<LoginScreen></LoginScreen>}
                    ></Route>
                    <Route
                        path="/register"
                        element={<RegisterScreen></RegisterScreen>}
                    ></Route>
                </Routes>
            </main>

            <Footer></Footer>
        </BrowserRouter>
    );
};

export default App;
