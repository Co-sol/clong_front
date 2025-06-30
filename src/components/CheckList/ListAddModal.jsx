import "./ListAddModal.css";
import { useContext, forwardRef, useState } from "react";
import Modal from "../Modal";
import Button from "../Button";
import DatePicker, { registerLocale } from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import ko from "date-fns/locale/ko";

import { toCleanStateContext } from "../../App";
import { toCleanDispatchContext } from "../../App";
import { getBadgeImage } from "../../utils/get-badge-images";

registerLocale("ko", ko);

const CustomInput =
    forwardRef <
    HTMLInputElement >
    ((props, ref) => (
        <div className="calendar-input-wrap">
            <input {...props} ref={ref} className="calendar-input" />
            <CalendarIcon />
        </div>
    ));

const ListAddModal = ({ isAddMode, setIsAddMode, selectedPlace }) => {
    const { onCreate } = useContext(toCleanDispatchContext);
    const { personData } = useContext(toCleanStateContext);
    const [selectedDate, setSelectedDate] =
        (useState < Date) | (null > new Date());

    const onClickCloseModal = () => {
        setIsAddMode(false);
    };

    return (
        <div className="ListAddModal">
            <Modal
                isOpen={isAddMode}
                onClose={onClickCloseModal}
                contentStyle={{
                    width: "40vw",
                    maxWidth: "577px",
                    height: "45vw",
                    maxHeight: "647px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="selectedPlace">{selectedPlace}</div>
                <section className="createToClean">
                    <div className="toClean_text">
                        추가하실 to-clean을 입력하세요.
                    </div>
                    <textarea></textarea>
                </section>
                <section className="createDeadLine">
                    <div className="deadLine_text">마감 기한</div>
                    <DatePicker
                        locale="ko"
                        dateFormat="yyyy.MM.dd"
                        selected={selectedDate}
                        onChange={setSelectedDate}
                        minDate={new Date(2000, 0, 1)}
                        maxDate={new Date()}
                        shouldCloseOnSelect
                        customInput={<CustomInput />}
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="custom-header">
                                <button
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                >
                                    ‹
                                </button>
                                <select
                                    value={getYear(date)}
                                    onChange={(e) =>
                                        changeYear(Number(e.target.value))
                                    }
                                >
                                    {Array.from(
                                        {
                                            length:
                                                getYear(new Date()) - 2000 + 1,
                                        },
                                        (_, i) => 2000 + i
                                    ).map((y) => (
                                        <option key={y} value={y}>
                                            {y}년
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={getMonth(date)}
                                    onChange={(e) =>
                                        changeMonth(Number(e.target.value))
                                    }
                                >
                                    {[
                                        "1월",
                                        "2월",
                                        "3월",
                                        "4월",
                                        "5월",
                                        "6월",
                                        "7월",
                                        "8월",
                                        "9월",
                                        "10월",
                                        "11월",
                                        "12월",
                                    ].map((m, i) => (
                                        <option key={i} value={i}>
                                            {m}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                >
                                    ›
                                </button>
                            </div>
                        )}
                    />
                </section>
                <section className="selectPerson">
                    <div className="personTodo_text">담당자</div>
                    <div className="personTodo">
                        {personData.map((item) => {
                            return (
                                <div key={item.name}>
                                    <img
                                        className="BadgeTodo"
                                        src={getBadgeImage(item.badgeId)}
                                    />
                                    <div className="nameTodo">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <Button type={"save"} text={"저장"} />
            </Modal>
        </div>
    );
};

export default ListAddModal;
