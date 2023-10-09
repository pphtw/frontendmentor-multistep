import { Component } from "react";
import Card from "./components/Card";

function App(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card progress={props.progress} />
    </div>
  );
}

export default App;
