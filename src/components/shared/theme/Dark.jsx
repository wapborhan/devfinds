"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Dark = () => {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!isDark);

    document.body.classList.toggle("white-version");
  };
  return (
    <>
      <div className="riht">
        <div className="rn-right-demo">
          <a
            className="demo-button"
            // onClick={() => setLgShow(true)}
            onClick={toggleDark}
          >
            <span className="text">{!isDark ? <FaSun /> : <FaMoon />}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Dark;
