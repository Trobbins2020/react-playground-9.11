import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Accordion from "./state-drills/Accordion";
import Bomb from "./state-drills/Bomb";
import HelloWorld from "./state-drills/HelloWorld";
import RouletteGun from "./state-drills/RouletteGun";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    {/* <RouletteGun bulletInChamber={8} /> */}
    {/* <Bomb /> */}
    <Accordion sections={sections} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
