import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
    const location = useLocation();

    const movie = location.state;
    // to get the value of object in the link

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>

            <video className="video" autoPlay controls src={movie.trailer} />
        </div>
    );
};

export default Watch;
