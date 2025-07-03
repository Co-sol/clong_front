import "./PListAddModal.css";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import Modal from "../Modal";
import Button from "../Button";

import {
    toCleanStateContext,
    toCleanDispatchContext,
} from "../../pages/GroupSpacePage";
import DatePicker from "react-datepicker";

import { ko } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import DropDown from "./DropDown";

registerLocale("ko", ko);

const PListAddModal = ({ isAddMode, setIsAddMode, personalData }) => {
    const { onCreate } = useContext(toCleanDispatchContext);
    const { personData } = useContext(toCleanStateContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const [createData, setCreateData] = useState({
        target: "group",
        place: "",
        toClean: "",
        deadLine: "미정",
        name: personData[0].name,
        badgeId: personData[0].badgeId,
    });

    const onClickCloseModal = () => {
        setIsAddMode(false);
    };

    const onClickCreate = () => {
        // 유효성 검사 예: toClean 또는 name이 없으면 추가 중단
        if (!createData.toClean || !createData.place) {
            alert("장소와 to-clean 내용을 모두 입력해주세요.");
            return;
        }

        onCreate(
            createData.target,
            createData.name,
            createData.badgeId,
            createData.place,
            createData.toClean,
            createData.deadLine
        );
        console.log(createData);
        setIsAddMode(false);
    };

    return (
        <div className="PListAddModal">
            <Modal
                isOpen={isAddMode}
                onClose={onClickCloseModal}
                contentStyle={{
                    width: "37vw",
                    // maxWidth: "532.8px",
                    height: "39vw",
                    // maxHeight: "518.4px",

                    paddingTop: "5vw",
                    paddingBottom: "3vw",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    className: "AddModal",

                    position: "relative",
                }}
            >
                <div className="selectedPlace">{`${personData[0].name}의 방`}</div>
                <section className="place_section">
                    <div className="place_text">장소를 선택하세요</div>
                    <DropDown
                        title={"장소 선택"}
                        className="placeDropdown"
                        data={personalData}
                        setCreateData={setCreateData}
                        createData={createData}
                        style={{
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            borderRadius: "15px",
                            marginBottom: "2.1vw",
                            width: "130px",
                            height: "43px",

                            color: "rgb(33, 37, 41)",
                            fontFamily: "sans-serif, Noto Sans KR",
                        }}
                    />
                </section>
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
                        locale="ko"
                        dateFormat="yyyy-MM-dd"
                        selected={selectedDate}
                        onChange={(date) => {
                            // 선택한 날짜와 오늘 날짜 빼서 'ms(getTime)->일' 단위로 변환
                            const d_day = Math.ceil(
                                (date.getTime() - new Date().getTime()) /
                                    (1000 * 60 * 60 * 24)
                            );
                            setSelectedDate(date);
                            setCreateData((prev) => ({
                                ...prev,
                                deadLine: `${
                                    // d_day면 D-day 출력, 아니면 'D-N' 출력
                                    d_day > 0 ? `D-${d_day}` : "D-day"
                                }`,
                            }));
                        }}
                        shouldCloseOnSelect={false}
                    />
                </section>
                {/* <section className="selectPerson">
                    <div className="personTodo_text">담당자</div>
                    <div className="personTodo">
                        {personData.map((item) => {
                            return (
                                <button
                                    className={`hover_${
                                        activeName === item.name
                                            ? "active"
                                            : "button"
                                    }`}
                                    key={item.name}
                                    onClick={() => {
                                        setCreateData({
                                            ...createData,
                                            name: item.name,
                                            badgeId: item.badgeId,
                                        });
                                        setActiveName(item.name);
                                    }}
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
                </section> */}
                <Button onClick={onClickCreate} type={"save"} text={"저장"} />
            </Modal>
        </div>
    );
};

export default PListAddModal;
