import { getBadgeImage } from "../../utils/get-badge-images";
import "./GEvalItem.css";
import Button from "../Button";

const GEvalItem = ({ badgeId, name, score }) => {
    return (
        <div className="GEvalItem">
            <section className="left">
                <img className="Badge_img" src={getBadgeImage(1)} />
                <div className="name">이름</div>
            </section>
            <section className="right">
                <div>stars</div>
                <Button text={"청소 리스트"} type={"list"} />
            </section>
        </div>
    );
};

export default GEvalItem;
