import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                controls
                src="http://127.0.0.1:8887/Spider-Man%20No%20Way%20Home%20(2021)%20%5B720p%5D%20%5BBluRay%5D%20%5BYTS.MX%5D/Spider-Man.No.Way.Home.2021.720p.BluRay.x264.AAC-%5BYTS.MX%5D.mp4"
            />
        </div>
    );
};

export default Watch;
