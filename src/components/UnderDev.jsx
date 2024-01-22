import React from "react";

function UnderDev() {
  return (
    <div
      className="shaded-box"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "fit-content",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <svg
        width="50"
        height="50"
        fill="cyan"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
      </svg>
      <p style={{ display: "inline" }}>Page is under development.</p>
    </div>
  );
}

export default UnderDev;
