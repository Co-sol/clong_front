import "./GList.css";
import { useContext } from "react";
import { toCleanDispatchContext, toCleanStateContext } from "../App";

import GListItem from "./GListItem";
import Button from "./Button";

const GList = () => {
    const data = useContext(toCleanStateContext);

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
            <div className="scrollBar">
                {data.group.map((item) => (
                    <GListItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default GList;
