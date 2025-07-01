import "./ListAddModal.css";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import Modal from "../Modal";
import Button from "../Button";

import { toCleanStateContext, toCleanDispatchContext } from "../../App";
import { getBadgeImage } from "../../utils/get-badge-images";
import DatePicker from "react-datepicker";

const ListAddModal = ({ isAddMode, setIsAddMode, selectedPlace }) => {
    const { onCreate } = useContext(toCleanDispatchContext);
    const { personData } = useContext(toCleanStateContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [createData, setCreateData] = useState({
        target: "group",
        place: selectedPlace,
        toClean: "",
        deadLine: "",
        name: "",
        badgeId: 1,
    });
    // target, name, badgeId, place, toClean, deadLine
    // target: "group",
    // place: "거실",
    // toClean: "tv 닦기",
    // deadLine: "D-2",
    // name: "A",
    // badgeId: 1,

    const onClickCloseModal = () => {
        setIsAddMode(false);
    };

    const onClickCreate = () => {
        // 유효성 검사 예: toClean 또는 name이 없으면 추가 중단
        if (!createData.toClean || !createData.name) {
            alert("to-clean 내용과 담당자를 모두 선택해주세요.");
            return;
        }

        onCreate(createData); // 객체 전체 전달
        console.log(createData);
        setIsAddMode(false); // 모달 닫기
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
                    <textarea
                        name="toClean"
                        value={createData.toClean}
                        onChange={(e) => {
                            setCreateData({
                                ...createData,
                                toClean: e.target.value,
                            });
                        }}
                    ></textarea>
                </section>
                <section className="createDeadLine">
                    <div className="deadLine_text">마감 기한</div>
                    <DatePicker
                        className="DatePicker"
                        placeholderText="0000-00-00"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        shouldCloseOnSelect={false}
                        // 날짜 임시 data (날짜 구현은 나중에)
                        // onChange={() => {
                        //     setCreateData({
                        //         ...createData,
                        //         deadLine: new Date(),
                        //     });
                        // }}
                    />
                </section>
                <section className="selectPerson">
                    <div className="personTodo_text">담당자</div>
                    <div className="personTodo">
                        {personData.map((item) => {
                            return (
                                <button
                                    className="hover_button"
                                    key={item.name}
                                    onClick={() =>
                                        setCreateData({
                                            ...createData,
                                            name: item.name,
                                            badgeId: item.badgeId,
                                        })
                                    }
                                >
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
                <Button onClick={onClickCreate} type={"save"} text={"저장"} />
            </Modal>
        </div>
    );
};

export default ListAddModal;
