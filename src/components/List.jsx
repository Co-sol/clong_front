import "./List.css";
import ListItem from "./ListItem";
import Button from "./Button";

const List = () => {
    return (
        <div className="List">
            <h3>To-clean</h3>
            <Button text={"편집"} type={"edit"} />
            <div className="place">거실</div>
            <div className="attribute">{`프로필 \u00A0\u00A0\u00A0\u00A0to-clean  \u00A0\u00A0\u00A0\u00A0마감 기한`}</div>
            <div>
                <ListItem />
            </div>
        </div>
    );
};

export default List;
