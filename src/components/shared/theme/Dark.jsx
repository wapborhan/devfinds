"use client";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Dark = () => {
  const [isDark, setDark] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );

  useEffect(() => {
    document.body.classList.toggle("white-version", isDark);
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

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
