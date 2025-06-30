import "./ListAddModal.css";
import { useContext } from "react";
import Modal from "../Modal";
import Button from "../Button";
import DatePicker from "react-datepicker";

import { toCleanStateContext } from "../../App";
import { toCleanDispatchContext } from "../../App";
import { getBadgeImage } from "../../utils/get-badge-images";

const ListAddModal = ({ isAddMode, setIsAddMode, selectedPlace }) => {
    const { onCreate } = useContext(toCleanDispatchContext);
    const { personData } = useContext(toCleanStateContext);
    console.log(personData);

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
                        className="DatePicker"
                        placeholderText="0000-00-00"
                        dateFormat="yyyy-mm-dd"
                        showPopperArrow={true}
                        locale="ko"
                    />
                </section>
                <section className="selectPerson">
                    <div className="personTodo_text">담당자</div>
                    <div className="personTodo">
                        {personData.map((item) => {
                            return (
                                <div>
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
