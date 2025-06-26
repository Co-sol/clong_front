import "./GList.css";
import { useContext } from "react";
import { toCleanContext } from "../App";

import ListItem from "./GListItem";
import Button from "./Button";

const GList = () => {
    const mockdata = useContext(toCleanContext);
    console.log(mockdata);

    return (
        <div className="GList">
            <h3>To-clean</h3>
            <Button text={"편집"} type={"edit"} />
            <div className="place">거실</div>
            <section className="title">
                <div className="profile_text">프로필</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감 기한</div>
            </section>
            <div>
                <ListItem />
            </div>
        </div>
    );
};

export default GList;
