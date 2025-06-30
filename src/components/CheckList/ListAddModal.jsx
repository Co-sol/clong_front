import "./ListAddModal.css";
import { useContext } from "react";
import Modal from "../Modal";
import Button from "../Button";

import { toCleanStateContext, toCleanDispatchContext } from "../../App";
import { getBadgeImage } from "../../utils/get-badge-images";
import DatePicker from "react-datepicker";

const ListAddModal = ({ isAddMode, setIsAddMode, selectedPlace }) => {
    const { onCreate } = useContext(toCleanDispatchContext);
    const { personData } = useContext(toCleanStateContext);
    const addMockData = {};
    // target, name, badgeId, place, toClean, deadLine
    // target: "group",
    // id: 1,
    // name: "A",
    // badgeId: 1,
    // place: "거실",
    // toClean: "tv 닦기",
    // deadLine: "D-2",

    const onClickCloseModal = () => {
        setIsAddMode(false);
    };

    const onKeyDownToClean = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addMockData["toClean"] = e.target.value;
        }
    };
    // return 문 안에 못 쓰는거 정리하기
    const onChangeDeadLine = (e) => {
        addMockData["deadLine"] = "D-test"; // e.target.value; (아직 DatePicker 구현 안해서 임시로 넣어둠)
    };

    const onClickSave = () => {
        return <>{onCreate()}</>;
    };

    return (
        <div className="ListAddModal">
            <Modal
                isOpen={isAddMode}
                onClose={onClickCloseModal}
                contentStyle={{
                    width: "34vw",
                    maxWidth: "491px",
                    height: "40vw",
                    maxHeight: "577.6px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    className: "AddModal",
                    position: "relative",
                }}
            >
                <div className="selectedPlace">{selectedPlace}</div>
                <section className="createToClean">
                    <div className="toClean_text">
                        추가하실 to-clean을 입력하세요.
                    </div>
                    <textarea onKeyDown={onKeyDownToClean}></textarea>
                </section>
                <section className="createDeadLine">
                    <div className="deadLine_text">마감 기한</div>
                    <DatePicker
                        className="DatePicker"
                        placeholderText="0000-00-00"
                        onChange={onChangeDeadLine}
                    />
                </section>
                <section className="selectPerson">
                    <div className="personTodo_text">담당자</div>
                    <div className="personTodo">
                        {personData.map((item) => {
                            return (
                                <button className="hover_wrapper">
                                    <img
                                        className="BadgeTodo"
                                        src={getBadgeImage(item.badgeId)}
                                    />
                                    <div className="nameTodo">{item.name}</div>
                                </button>
                            );
                        })}
                    </div>
                </section>
                <Button onClick={onClickSave} type={"save"} text={"저장"} />
            </Modal>
        </div>
    );
};

export default ListAddModal;
