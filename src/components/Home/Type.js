import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst & Business Intelligence Enthusiast",
          "Consultant en Stratégie de Marché",
          "Ingénieur Généraliste en Formation",
          "Power BI Specialist",
          "AI & Digital Innovation Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
