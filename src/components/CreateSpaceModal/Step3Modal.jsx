function Step3Modal({
  modalShape,
  shapeDirection,
  spaceName,
  shapeSize, // 추가
  onNext,
  onBack,
}) {
  let w = modalShape.w;
  let h = modalShape.h;
  if (shapeDirection === "horizontal") {
    w = modalShape.h;
    h = modalShape.w;
  }

  // 미리보기 도형 style 계산
  const baseWidth = 70 * w;
  const baseHeight = 70 * h;
  const scale = shapeSize === 1 ? 0.7 : 1.0;
  const previewWidth = baseWidth * scale;
  const previewHeight = baseHeight * scale;

  return (
    <>
      <button className="modal-back" onClick={onBack}>
        ←
      </button>

      <div className="modal-title">좋아요!</div>

      <div className="modal-label">원하는 위치를 클릭하면 도형이 생성돼요</div>

      <div
        className="modal-shape-preview"
        style={{
          width: previewWidth,
          height: previewHeight,
          margin: "30px auto 20px",
          background: "#EBFEF4",
          border: "2px solid #8BE2B6",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,

          whiteSpace: "nowrap",
          overflow: "visible",
        }}
      >
        {spaceName}
      </div>

      <button className="modal-next" onClick={onNext}>
        다음
      </button>
    </>
  );
}

export default Step3Modal;
