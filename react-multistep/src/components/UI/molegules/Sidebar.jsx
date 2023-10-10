import { Component } from "react";

const circleStyle =
  "flex text-md font-bold mr-5 border-2 justify-center items-center border-[#F0F6FF] rounded-full w-12 h-12";

function Progress(props) {
  return (
    <div className="flex flex-row w-full items-center mx-10 my-5">
      <div
        className={
          props.isActive
            ? `${circleStyle} text-[#02295A] bg-[#F0F6FF]`
            : `${circleStyle} text-[#F0F6FF] `
        }
      >
        {props.step}
      </div>
      <div className="flex flex-col">
        <h2 className="text-base font-[400] text-[#D6D9E6]">
          STEP {props.step}
        </h2>
        <h2 className="text-md font-[500] text-[#F0F6FF]">{props.progress}</h2>
      </div>
    </div>
  );
}

function Sidebar(props) {
  return (
    <div className="bg-[url('/bg-sidebar-desktop.svg')] bg-cover flex flex-col w-1/2 h-full rounded-lg bg-no-repeat pt-10">
      <Progress isActive={props.progress == 1} step="1" progress="YOUR INFO" />
      <Progress
        isActive={props.progress == 2}
        step="2"
        progress="SELECT PLAN"
      />
      <Progress isActive={props.progress == 3} step="3" progress="ADD-ONS" />
      <Progress isActive={props.progress == 4} step="4" progress="SUMMARY" />
    </div>
  );
}

export default Sidebar;
