import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
    const { user } = useContext(AuthContext);

    console.log("|efds", JSON.parse(localStorage.getItem("user")).accessToken);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? <Home /> : <Navigate replace to="/register" />
                    }
                />
                <Route
                    path="/register"
                    element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/" />}
                />
                {user && (
                    <>
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route
                            path="/series"
                            element={<Home type="series" />}
                        />
                        <Route path="/watch" element={<Watch />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
