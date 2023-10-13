import { Component } from "react";
import Card from "./components/UI/organisms/Card";

function App(props) {
  return (
    <div className="flex flex-col lg:justify-center lg:items-center lg:h-screen">
      <Card progress={props.progress} />
      <div className="lg:attribution lg:flex lg:justify-center hidden">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="text-[#473DFF]"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/pphtw"
            className="text-[#473DFF]"
            target="_blank"
          >
            Phutawan Palakavong
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
