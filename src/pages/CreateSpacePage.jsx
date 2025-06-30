import React, { useState } from "react";
import Header from "../components/Header";
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

function ShapeButton({ shape, onClick, direction = "vertical" }) {
  const w = direction === "horizontal" ? shape.h : shape.w;
  const h = direction === "horizontal" ? shape.w : shape.h;
  return (
    <button
      className="shape-btn"
      style={{ width: `${40 * w}px`, height: `${40 * h}px` }}
      onClick={() => onClick(shape)}
    >
      +
    </button>
  );
}

function CreateSpacePage() {
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
                  return <div key={idx} className="grid-cell" />;
                })}
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
              <button className="save-btn">저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSpacePage;
