import "./GroupHome.css";

import home_img from "../../assets/home_img.png";
import pencil_img from "../../assets/pencil_img.png";

const GroupHome = () => {
    return (
        <div className="GroupHome">
            <div className="groupName">
                <img className="home_img" src={home_img} />
                <h3>Clong's home</h3>
                <img className="pencil_img" src={pencil_img} />
            </div>
            <div className="groupHomeUnder">
                <div className="groupSpace">공간 구조도</div>
                <div className="groupHomeRE">
                    <div className="groupRule">그룹 규칙</div>
                    <div className="groupEval">그룹원 평가</div>
                </div>
            </div>
        </div>
    );
};

export default GroupHome;
