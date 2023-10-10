import { Component } from "react";
import Card from "./components/Card";

function App(props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card progress={props.progress} />
      <div className="attribution flex justify-center">
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
