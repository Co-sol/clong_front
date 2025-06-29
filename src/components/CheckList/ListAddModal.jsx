import "./ListAddModal.css";
import { useContext } from "react";
import Modal from "../Modal";
import Button from "../Button";

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
        <>
            <Modal
                className="Modal"
                isOpen={isAddMode}
                onClose={onClickCloseModal}
            >
                <div>{selectedPlace}</div>
                <section className="createToClean">
                    <div>추가하실 to-clean을 입력하세요.</div>
                    <textarea></textarea>
                </section>
                <section className="createDeadLine">
                    <div>마감 기한</div>
                    <input placeholder="0000-00-00" type="date" />
                </section>
                <section className="selectPerson">
                    <div>담당자</div>
                    <div>
                        {personData.map((item) => {
                            return (
                                <div>
                                    <div>{item.name}</div>
                                    <img src={getBadgeImage(item.badgeId)} />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <Button text={"저장"} />
            </Modal>
        </>
    );
};

export default ListAddModal;
