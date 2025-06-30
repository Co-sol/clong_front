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
  { id: "shape-2x3", w: 2, h: 3 },
  { id: "shape-3x4", w: 3, h: 4 },
];

function CreateSpacePage() {
  return (
    <>
      <div className="create-space-bg">
        <Header />

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
      </div>
    </>
  );
}

export default CreateSpacePage;
