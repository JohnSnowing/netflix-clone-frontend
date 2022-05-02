import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFlMmUwNDdlODAyNmVhYzRlMDE4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTUwNjU2MSwiZXhwIjoxNjUxOTM4NTYxfQ.vA3yyVGNeVNVhvfIj1UoP5Hdcum0QtlAuGH3yha7ab4",
                        },
                    },
                );
                setLists(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
};

export default Home;
