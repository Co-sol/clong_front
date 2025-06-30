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
        {" "}
        <Header />{" "}
      </div>
    </>
  );
}

export default CreateSpacePage;
