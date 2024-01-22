import React from "react";
import IconButton from "./IconButton";

function BacktoTop() {
  return (
    <div
      className="back-to-top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconButton text="Back to Top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="18"
          fill="#a3fdffe7"
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4H120c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z" />
        </svg>
      </IconButton>
    </div>
  );
}

export default BacktoTop;
