function Step2Modal({
  modalShape,
  shapeDirection,
  setShapeDirection,
  shapeSize,
  setShapeSize,
  onNext,
  onBack,
}) {
  return (
    <>
      <button className="modal-back" onClick={onBack}>
        ←
      </button>

      <div className="modal-title">도형 편집하기</div>
      <div
        className="modal-shape-preview"
        style={{
          width: 50 * modalShape.w,
          height: 50 * modalShape.h,
          margin: "10px auto ",
          background: "#d9d9d9",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        +
      </div>
      <div className="modal-label">도형의 방향을 선택해주세요</div>
      <div className="modal-radio-group">
        <label>
          <input
            type="radio"
            checked={shapeDirection === "vertical"}
            onChange={() => setShapeDirection("vertical")}
          />
          <span>가로</span>
        </label>
        <label>
          <input
            type="radio"
            checked={shapeDirection === "horizontal"}
            onChange={() => setShapeDirection("horizontal")}
          />
          <span>세로</span>
        </label>
      </div>

      <div className="modal-label">크기를 선택해주세요</div>
      <input
        type="range"
        min="1"
        max="2"
        value={shapeSize}
        onChange={(e) => setShapeSize(Number(e.target.value))}
      />

      <button className="modal-next" onClick={onNext}>
        다음
      </button>
    </>
  );
}

export default Step2Modal;
