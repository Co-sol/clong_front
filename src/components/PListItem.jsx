import "./PListItem.css";
import { getBadgeImage } from "../utils/get-badge-images";
import Button from "./Button";

const PListItem = ({ badgeId }) => {
    badgeId = 1;
    return (
        <div className="PListItem">
            <div className="place">장소</div>
            <div className="toClean">할 일</div>
            <div className="deadLine">마감 기한</div>
            <Button type={"done"} text={"완료"} />
        </div>
    );
};

export default PListItem;
