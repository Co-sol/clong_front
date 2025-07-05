import { getBadgeImage } from "../../utils/get-badge-images";
import "./GEvalItem.css";

const GEvalItem = ({ badgeId, name, score }) => {
    return (
        <div className="GEvalItem">
            <section className="left">
                <img className="Badge_img" src={getBadgeImage(1)} />
                <div className="name">이름</div>
            </section>
            <section className="right">
                <div>stars</div>
                <div>개인 체크리스트</div>
            </section>
        </div>
    );
};

export default GEvalItem;
