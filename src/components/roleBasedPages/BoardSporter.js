import React, {useState, useEffect} from "react"
import UserService from "../../services/user.service"

const BoardSporter = () =>{
    const [content, setContent] = useState("");

    useEffect(()=>{
        UserService.getSporterBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return(
        <div>
            <header>
                <h3>{content}</h3>
            </header>
        </div>
    )
};

export default BoardSporter;