import "./GListItem.css";
import { getBadgeImage } from "../utils/get-badge-images";
import Button from "./Button";

const GListItem = ({ item }) => {
    return (
        <div className="GListItem">
            <img
                className={`Badge Badge_${item.badgeId}`}
                src={getBadgeImage(item.badgeId)}
            />
            <div className="toClean">{item.toClean}</div>
            <div className="deadLine">{item.deadLine}</div>
            <Button type={"done"} text={"완료"} />
        </div>
    );
};

export default GListItem;
