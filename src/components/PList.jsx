import "./PList.css";
import { useContext } from "react";
import { toCleanContext } from "../App";

import ListItem from "./GListItem";
import Button from "./Button";
import { getBadgeImage } from "../utils/get-badge-images";

const PList = () => {
    const mockdata = useContext(toCleanContext);
    console.log(mockdata);

    return (
        <div className="PList">
            <h3>To-clean</h3>
            <Button text={"편집"} type={"edit"} />
            <div className="profile">
                <img src={getBadgeImage(1)} />
            </div>
            <section className="title">
                <div className="place_text">공간</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감 기한</div>
            </section>
            <div>
                <ListItem />
            </div>
        </div>
    );
};

export default PList;
