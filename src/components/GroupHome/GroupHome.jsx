import "./GroupHome.css";
import home_img from "../../assets/home_img.png";
import pencil_img from "../../assets/pencil_img.png";
import Button from "../Button";

const groupData = {
    groupName: "Clong",
    groupRule:
        "설거지는 당일에ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇddddddddddddddddddddddddddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    members: ["A", "B", "C"],
    ownerNickname: "solux", // 임시 고정값
};

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
                    <div className="groupRule">
                        <h3>그룹 규칙</h3>
                        <div className="ruleContent">{groupData.groupRule}</div>
                    </div>
                    <div className="groupEval">
                        <h3>그룹원</h3>
                        <div className="members">그룹원들 정보 들어감</div>
                        <Button type={"eval"} text={"그룹원 평가"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupHome;
