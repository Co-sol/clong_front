import React from "react";

function GroupSpacePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f7f7",
      }}
    >
      <h1>GroupSpacePage</h1>
      <p>이 페이지는 /groupSpace 경로입니다.</p>
      <p>라우팅이 정상적으로 동작하면 이 화면이 보입니다.</p>
    </div>
  );
}

export default GroupSpacePage;
