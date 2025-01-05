"use client";

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [blockSize, setBlockSize] = useState(19);
  const [blockMargin, setBlockMargin] = useState(5);
  const [fontSize, setFontSize] = useState(20);
  const [windowWidth, setWindowWidth] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        setWindowWidth(window.innerWidth);
        setBlockSize(12);
        setBlockMargin(3);
        setFontSize(14);
      } else {
        setWindowWidth(window.innerWidth);
        setBlockSize(19);
        setBlockMargin(5);
        setFontSize(20);
      }
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectLastSixMonths = (contributions) => {
    const b = contributions.filter((activity) => {
      const date = new Date(activity.date);
      const dateNow = Date.now() - 3.5 * 30.4 * 24 * 60 * 60 * 1000;
      const c = date.getTime() >= dateNow ? true : false;
      return c;
    });
    return b;
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <GitHubCalendar
        username="1ashutoshverma"
        transformData={selectLastSixMonths}
        labels={{
          totalCount: "{{count}} commits in last 6 months",
        }}
        blockSize={blockSize}
        blockMargin={blockMargin}
        fontSize={fontSize}
        hideTotalCount={true}
        theme={{
          light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
          dark: ["hsl(0, 0%, 10%)", "#8667D9"],
        }}
        style={{
          color: "#854CE6",
          margin: "auto",
          padding: "15px",
        }}
      />
    </div>
  );
}

export default Github;
