import "./PListItem.css";
import { getBadgeImage } from "../../utils/get-badge-images";
import Button from "../Button";

const PListItem = ({ item }) => {
    return (
        <div className="PListItem">
            <div className="place">{item.place}</div>
            <div className="toClean">{item.toClean}</div>
            <div className="deadLine">{item.deadLine}</div>
            <Button type={"done"} text={"완료"} />
        </div>
    );
};

export default PListItem;
