function Step3Modal({
  modalShape,
  shapeDirection,
  spaceName,
  shapeSize, // 추가
  onNext,
  onBack,
}) {
  // 방향에 따라 w, h 결정
  let w = modalShape.w;
  let h = modalShape.h;
  if (shapeDirection === "horizontal") {
    w = modalShape.h;
    h = modalShape.w;
  }

  // 미리보기 도형 style 계산
  const baseWidth = 70 * w;
  const baseHeight = 70 * h;
  const previewWidth = baseWidth;
  const previewHeight = baseHeight;

  const ratioW = w * shapeSize;
  const ratioH = h * shapeSize;

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
          position: "relative",
        }}
      >
        {spaceName}
        <span className="shape-ratio">
          {ratioW}x{ratioH}
        </span>
      </div>

      <button className="modal-next" onClick={onNext}>
        다음
      </button>
    </>
  );
}

export default Step3Modal;
