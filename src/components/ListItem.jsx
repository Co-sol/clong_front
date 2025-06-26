import "./ListItem.css";
import { getBadgeImage } from "../utils/get-badge-images";
import Button from "./Button";

const ListItem = ({ badgeId }) => {
    badgeId = 1;
    return (
        <div className="ListItem">
            <img
                className={`Badge Badge_${badgeId}`}
                src={getBadgeImage(badgeId)}
            />
            <div className="toClean">할 일</div>
            <div className="deadLine">마감 기한</div>
            <Button type={"done"} text={"완료"} />
        </div>
    );
};

export default ListItem;
