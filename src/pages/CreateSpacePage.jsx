import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Step1Modal from "../components/CreateSpaceModal/Step1Modal";
import Step2Modal from "../components/CreateSpaceModal/Step2Modal";
import Step3Modal from "../components/CreateSpaceModal/Step3Modal";
import "./CreateSpacePage.css";

const GRID_SIZE = 10;

// 도형 정보 정의
const SHAPES = [
  { id: "shape-1x1", w: 1, h: 1 },
  { id: "shape-2x1", w: 2, h: 1 },
  { id: "shape-3x1", w: 3, h: 1 },
  { id: "shape-4x1", w: 4, h: 1 },
  { id: "shape-3x2", w: 3, h: 2 },
  { id: "shape-4x3", w: 4, h: 3 },
];

function CreateSpacePage() {
  // 그리드에 배치된 도형 배열 정보
  const [placedShapes, setPlacedShapes] = useState([]);

  const [modalStep, setModalStep] = useState(0);
  const [modalShape, setModalShape] = useState(null); // 선택된 도형 정보
  const [spaceType, setSpaceType] = useState(0);
  const [spaceName, setSpaceName] = useState("");
  const [shapeDirection, setShapeDirection] = useState("vertical");
  const [shapeSize, setShapeSize] = useState(1); // 도형 크기
  const [pendingShape, setPendingShape] = useState(null); // 실제 배치할 shape
  const [hoverCell, setHoverCell] = useState(null); // 그리드 패널 - 미리보기
  const [previewShape, setPreviewShape] = useState(null);

  // 도형 버튼 클릭 시
  const handleShapeSelect = (shape) => {
    setModalShape(shape);
    setModalStep(1);
    setSpaceType(0);
    setSpaceName("");
    setShapeDirection("vertical");
    setShapeSize(1);
    setPendingShape(null);
  };

  // step1: 공간 종류 선택 / 공간 이름 입력
  const handleStep1 = () => {
    if (!spaceName) return;
    setModalStep(2);
  };

  // step2: 도형 방향 / 크기 선택
  const handleStep2 = () => {
    setModalStep(3);

    let w = modalShape.w,
      h = modalShape.h;

    if (shapeDirection === "horizontal") {
      w = modalShape.h;
      h = modalShape.w;
    }

    setPendingShape({
      ...modalShape,
      w: w * shapeSize,
      h: h * shapeSize,
      name: spaceName,
      type: spaceType,
      direction: shapeDirection,
    });
  };

  // step3: 위치 선택 안내
  const handleStep3 = () => {
    // 방향에 따라 w, h 결정
    let w = modalShape.w;
    let h = modalShape.h;
    if (shapeDirection === "horizontal") {
      w = modalShape.h;
      h = modalShape.w;
    }
    const newPendingShape = {
      ...modalShape,
      w: w * shapeSize,
      h: h * shapeSize,
      name: spaceName,
      type: spaceType,
      direction: shapeDirection,
    };
    setPendingShape(newPendingShape);
    console.log("[handleStep3] setPendingShape:", newPendingShape);
    setModalStep(0);
    setModalShape(null);
  };

  // 뒤로 가기
  const handleBack = () => {
    setModalStep((prev) => Math.max(1, prev - 1));
  };

  // 닫기
  const handleClose = () => {
    setModalStep(0);
    setModalShape(null);
  };

  const renderModal = () => {
    if (!modalStep) return null;
    return (
      <Modal isOpen={!!modalStep} onClose={handleClose}>
        {modalStep === 1 && (
          <Step1Modal
            spaceType={spaceType}
            setSpaceType={setSpaceType}
            spaceName={spaceName}
            setSpaceName={setSpaceName}
            onNext={handleStep1}
          />
        )}
        {modalStep === 2 && (
          <Step2Modal
            modalShape={modalShape}
            shapeDirection={shapeDirection}
            setShapeDirection={setShapeDirection}
            onNext={handleStep2}
            shapeSize={shapeSize}
            setShapeSize={setShapeSize}
            onBack={handleBack}
          />
        )}
        {modalStep === 3 && (
          <Step3Modal
            modalShape={modalShape}
            shapeDirection={shapeDirection}
            spaceName={spaceName}
            shapeSize={shapeSize} // 추가
            onNext={handleStep3}
            onBack={handleBack}
            setPreviewShape={setPreviewShape}
          />
        )}
      </Modal>
    );
  };

  return (
    <>
      <div className="create-space-bg">
        <Header />
        <div className="create-space-content">
          <div className="grid-panel">
            <div className="grid-container">
              <div
                className="grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                  gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                  gap: "0.8px",
                }}
              >
                {[...Array(GRID_SIZE * GRID_SIZE)].map((_, idx) => {
                  const row = Math.floor(idx / GRID_SIZE);
                  const col = idx % GRID_SIZE;

                  // 도형 배치 모드일 때만 하이라이트 계산
                  let isHighlighted = false;
                  if (pendingShape && hoverCell) {
                    const { w, h } = pendingShape;
                    if (
                      row >= hoverCell.row &&
                      row < hoverCell.row + h &&
                      col >= hoverCell.col &&
                      col < hoverCell.col + w
                    ) {
                      isHighlighted = true;
                    }
                  }

                  // 콘솔로 상태 확인
                  if (isHighlighted) {
                    console.log("[Grid] pendingShape:", pendingShape, "hoverCell:", hoverCell);
                  }

                  return (
                    <div
                      key={idx}
                      className={`grid-cell${isHighlighted ? " highlight" : ""}`}
                      onMouseEnter={() => {
                        if (pendingShape) {
                          setHoverCell({ row, col });
                          console.log("[onMouseEnter] hoverCell:", { row, col });
                        }
                      }}
                      onMouseLeave={() => {
                        if (pendingShape) setHoverCell(null);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="shape-panel">
            <div className="shape-panel-inner">
              <div className="shape-panel-title">공간 도형</div>
              <div className="shape-row">
                <ShapeButton shape={SHAPES[0]} onClick={handleShapeSelect} />
                <ShapeButton shape={SHAPES[1]} onClick={handleShapeSelect} />
              </div>
              <div className="shape-row">
                <ShapeButton shape={SHAPES[2]} onClick={handleShapeSelect} />
              </div>
              <div className="shape-row">
                <ShapeButton shape={SHAPES[3]} onClick={handleShapeSelect} />
              </div>
              <div className="shape-row">
                <ShapeButton shape={SHAPES[4]} onClick={handleShapeSelect} />
              </div>
              <div className="shape-row">
                <ShapeButton shape={SHAPES[5]} onClick={handleShapeSelect} />
              </div>
              <button className="save-btn">저장하기</button>
            </div>
          </div>
        </div>
        {renderModal()}
      </div>
    </>
  );
}

function ShapeButton({ shape, onClick, direction = "vertical" }) {
  const w = direction === "horizontal" ? shape.h : shape.w;
  const h = direction === "horizontal" ? shape.w : shape.h;
  return (
    <button
      className="shape-btn"
      style={{
        width: `${w * 20}%`,
        aspectRatio: `${w} / ${h}`,
        position: "relative",
      }}
      onClick={() => onClick(shape)}
    >
      +
      <span className="shape-ratio">
        {w}x{h}
      </span>
    </button>
  );
}

export default CreateSpacePage;
