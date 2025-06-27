import "./PList.css";
import { useContext, useState } from "react";
import {
    toCleanDispatchContext,
    toCleanStateContext,
} from "../Pages/GroupHomePage";

import PListItem from "./PListItem";
import Button from "./Button";
import { getBadgeImage } from "../utils/get-badge-images";

const PList = () => {
    const data = useContext(toCleanStateContext);
    const [isEditMode, setIsEditMode] = useState(false);
    const [text, setText] = useState("편집");

    const selectedName = "A";
    const personalData = data.filter(
        (item) =>
            item.target === "person" &&
            String(item.name) === String(selectedName)
    );

    const onClickEditMode = () => {
        isEditMode ? setIsEditMode(false) : setIsEditMode(true);
        console.log(isEditMode);
        isEditMode ? setText("저장") : setText("편집");
    };

    // 어짜피 personalData는 1명에 대한 data기에 badgeId가 동일할거라 personalData[0]으로 통일시킴
    return (
        <div className="PList">
            <h3>To-clean</h3>
            <Button onClick={onClickEditMode} text={text} type={"edit"} />
            <div className="profile">
                <img src={getBadgeImage(personalData[0].badgeId)} />
                <div className="border"></div>
            </div>
            <section className="title">
                <div className="place_text">공간</div>
                <div className="to-clean_text">to-clean</div>
                <div className="deadLine_text">마감 기한</div>
            </section>
            <div>
                {personalData.map((item) => (
                    <PListItem item={item} />
                ))}
                {console.log(isEditMode)}
                {/* 비동기화 때문에 위에서는 state isEditMode는 나중에 바뀜 그래서 +버튼이 '편집/저장'과 거꾸로 되길래 !로 처리함*/}
                {!isEditMode && <Button text={"+"} type={"add2"} />}{" "}
            </div>
        </div>
    );
};

export default PList;
