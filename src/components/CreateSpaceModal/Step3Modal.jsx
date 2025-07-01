function Step3Modal({ modalShape, shapeDirection, spaceName, onNext, onBack }) {
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
          width:
            60 *
            (shapeDirection === "horizontal" ? modalShape.h : modalShape.w),
          height:
            60 *
            (shapeDirection === "horizontal" ? modalShape.w : modalShape.h),
          margin: "10px auto",
          background: "#d9d9d9",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
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
