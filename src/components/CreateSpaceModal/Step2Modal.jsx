import Modal from "../Modal";
import "./CreateModal.css";

function Step2Modal({
  modalShape,
  shapeDirection,
  setShapeDirection,
  shapeSize,
  setShapeSize,
  onNext,
  onBack,
  isOpen,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      contentStyle={{
        width: "400px",
        maxWidth: "none", // 최대 너비 제한 해제
        minWidth: "auto", // 최소 너비 제거
      }}
    >
      <button className="modal-back" onClick={onBack}>
        ←
      </button>

      <div
        className="modal-title"
        style={{
          fontFamily: "NotoSansKR-Bold, sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        도형 편집하기
      </div>
      <div
        className="modal-shape-preview"
        style={{
          width: 50 * modalShape.w,
          height: 50 * modalShape.h,
          margin: "5px auto 20px",
          background: "#EBFEF4",
          border: "2px solid #8BE2B6",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        +
      </div>
      <div
        className="modal-label"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontSize: "1rem",
          marginBottom: "15px",
        }}
      >
        <strong>도형의 방향을 선택해주세요</strong>
      </div>
      <div
        className="modal-radio-group"
        style={{
          width: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        <label
          style={{
            fontFamily: "NotoSansKR-Regular, sans-serif",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            checked={shapeDirection === "vertical"}
            onChange={() => setShapeDirection("vertical")}
          />
          <span>가로</span>
        </label>
        <label
          style={{
            fontFamily: "NotoSansKR-Regular, sans-serif",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            checked={shapeDirection === "horizontal"}
            onChange={() => setShapeDirection("horizontal")}
          />
          <span>세로</span>
        </label>
      </div>

      <div
        className="modal-label"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontSize: "1rem",
          marginBottom: "15px",
        }}
      >
        <strong>도형의 크기를 선택해주세요</strong>
      </div>
      <div className="modal-slider-group">
        <input
          type="range"
          className="modal-slider"
          min="1"
          max="2"
          value={shapeSize}
          onChange={(e) => setShapeSize(Number(e.target.value))}
          style={{ "--value": (shapeSize - 1) * 100 }}
        />
        <div className="slider-label">
          <span>1</span>
          <span>2</span>
        </div>
      </div>

      <button className="modal-next" onClick={onNext}>
        다음
      </button>
    </Modal>
  );
}

export default Step2Modal;
