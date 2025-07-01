function Step1Modal({
  spaceType,
  setSpaceType,
  spaceName,
  setSpaceName,
  onNext,
}) {
  return (
    <>
      <div className="modal-title">도형을 선택했어요!</div>
      <div className="modal-section">
        <div className="modal-label">
          <strong>이 공간은 어떤 공간인가요?</strong>
        </div>
        <div className="modal-radio-group">
          <label>
            <input
              type="radio"
              checked={spaceType === 0}
              onChange={() => setSpaceType(0)}
            />
            <span>공용 공간</span>
          </label>

          <label>
            <input
              type="radio"
              checked={spaceType === 1}
              onChange={() => setSpaceType(1)}
            />
            <span>개인 공간</span>
          </label>
        </div>

        <div className="modal-label">
          <strong>공간의 이름을 입력해주세요</strong>
        </div>
        <input
          className="modal-input"
          value={spaceName}
          onChange={(e) => setSpaceName(e.target.value)}
          placeholder="예: 거실"
        />
      </div>

      <button className="modal-next" onClick={onNext} disabled={!spaceName}>
        다음
      </button>
    </>
  );
}

export default Step1Modal;
