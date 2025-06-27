import "./PList.css";
import { useContext } from "react";
import { toCleanDispatchContext, toCleanStateContext } from "../App";

import PListItem from "./PListItem";
import Button from "./Button";
import { getBadgeImage } from "../utils/get-badge-images";

const PList = () => {
    const data = useContext(toCleanStateContext);
    const badgeId = 1;

    return (
        <div className="PList">
            <h3>To-clean</h3>
            <Button text={"편집"} type={"edit"} />
            <div className="profile">
                <img src={getBadgeImage(badgeId)} />
                <div className="border"></div>
            </div>
            <section className="title">
                <div className="place_text">공간</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감 기한</div>
            </section>
            <div>
                <PListItem />
            </div>
        </div>
    );
};

export default PList;
