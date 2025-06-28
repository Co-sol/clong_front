import "./GListItem.css";
import { getBadgeImage } from "../utils/get-badge-images";
import Button from "./Button";
import { useContext } from "react";
import { toCleanDispatchContext } from "../App";

const GListItem = ({ isEditMode, item }) => {
    const { onDelete } = useContext(toCleanDispatchContext);
    return (
        <div className="GListItem">
            <img
                className={`Badge Badge_${item.badgeId}`}
                src={getBadgeImage(item.badgeId)}
            />
            <div className="toClean">{item.toClean}</div>
            <div className="deadLine">{item.deadLine}</div>
            {isEditMode ? (
                <Button onClick={onDelete} type={"delete"} text={"✕"} />
            ) : (
                <Button type={"done"} text={"완료"} />
            )}
        </div>
    );
};

export default GListItem;
