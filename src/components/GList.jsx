import "./GList.css";
import { useContext, useState, useRef } from "react";
import { toCleanStateContext } from "../App";

import GListItem from "./GListItem";
import Button from "./Button";

const GList = () => {
    const data = useContext(toCleanStateContext);
    const [isEditMode, setIsEditMode] = useState(false);
    const [text, setText] = useState("편집");
    const selectedPlace = "화장실";
    const groupData = data.filter(
        (item) =>
            item.target === "group" &&
            String(item.place) === String(selectedPlace)
    );

    const onClickEditMode = () => {
        setIsEditMode((prev) => {
            const next = !prev;
            setText(next ? "저장" : "편집");
            return next;
        });
    };

    return (
        <div className="GList">
            <h3>To-clean</h3>
            <Button onClick={onClickEditMode} text={text} type={"edit"} />
            <div className="place">{selectedPlace}</div>
            <section className="title">
                <div className="profile_text">프로필</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감기한</div>
            </section>
            <div className="scrollBar">
                {groupData.map((item) => (
                    <GListItem isEditMode={isEditMode} item={item} />
                ))}
                {isEditMode && <Button text={"+"} type={"add1"} />}
            </div>
        </div>
    );
};

export default GList;
