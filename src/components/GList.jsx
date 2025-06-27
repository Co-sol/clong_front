import "./GList.css";
import { useContext, useState, useRef } from "react";
import {
    toCleanDispatchContext,
    toCleanStateContext,
} from "../Pages/GroupHomePage";

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
        isEditMode ? setIsEditMode(false) : setIsEditMode(true);
        isEditMode ? setText("저장") : setText("편집");
    };

    return (
        <div className="GList">
            <h3>To-clean</h3>
            <Button onClick={onClickEditMode} text={text} type={"edit"} />
            <div className="place">{selectedPlace}</div>
            <section className="title">
                <div className="profile_text">프로필</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감 기한</div>
            </section>
            <div className="scrollBar">
                {groupData.map((item) => (
                    <GListItem item={item} />
                ))}
                {/* 비동기화 때문에 위에서는 state isEditMode는 나중에 바뀜 그래서 +버튼이 '편집/저장'과 거꾸로 되길래 !로 처리함*/}
                {!isEditMode && <Button text={"+"} type={"add1"} />}
            </div>
        </div>
    );
};

export default GList;
