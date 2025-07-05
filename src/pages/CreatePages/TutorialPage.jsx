import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./TutorialPage.css";

const GRID_SIZE = 10;

const SHAPES = [
  { id: "shape-1x1", w: 1, h: 1 },
  { id: "shape-2x1", w: 2, h: 1 },
  { id: "shape-3x1", w: 3, h: 1 },
  { id: "shape-4x1", w: 4, h: 1 },
  { id: "shape-3x2", w: 3, h: 2 },
  { id: "shape-4x3", w: 4, h: 3 },
];

function ShapeButton({ shape, onClick, direction = "vertical" }) {
  const w = direction === "horizontal" ? shape.h : shape.w;
  const h = direction === "horizontal" ? shape.w : shape.h;
  return (
    <button
      className="tutorial-shape-btn"
      style={{
        width: `${w * 20}%`,
        aspectRatio: `${w} / ${h}`,
      }}
      onClick={() => onClick && onClick(shape)}
    >
      +
    </button>
  );
}

const TutorialPage = () => {
  return (
    <div
      className="create-space-bg"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* 검정 반투명 오버레이 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />
      <Header hideMenu />
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
              {[...Array(GRID_SIZE * GRID_SIZE)].map((_, idx) => (
                <div key={idx} className="grid-cell" />
              ))}
            </div>
          </div>
        </div>
        <div className="shape-panel">
          <div className="shape-panel-inner">
            <div className="shape-panel-title">공간 도형</div>
            <div className="shape-row">
              <ShapeButton shape={SHAPES[0]} />
              <ShapeButton shape={SHAPES[1]} />
            </div>
            <div className="shape-row">
              <ShapeButton shape={SHAPES[2]} />
            </div>
            <div className="shape-row">
              <ShapeButton shape={SHAPES[3]} />
            </div>
            <div className="shape-row">
              <ShapeButton shape={SHAPES[4]} />
            </div>
            <div className="shape-row">
              <ShapeButton shape={SHAPES[5]} />
            </div>
            <button className="tutorial-save-btn">저장하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
