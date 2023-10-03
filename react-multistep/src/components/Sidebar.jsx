import { Component } from "react";

function Progress(props) {
  return (
    <div className="flex flex-row items-center mx-10 my-5">
      <div className="flex text-md font-bold mr-5 border-2 justify-center items-center text-[#F0F6FF] border-[#F0F6FF] rounded-full w-12 h-12">
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

class Sidebar extends Component {
  render() {
    return (
      <div className="bg-[url('/bg-sidebar-desktop.svg')] bg-contain flex flex-col w-1/3 h-full bg-no-repeat pt-10">
        <Progress step="1" progress="YOUR INFO" />
        <Progress step="2" progress="SELECT PLAN" />
        <Progress step="3" progress="ADD-ONS" />
        <Progress step="4" progress="SUMMARY" />
      </div>
    );
  }
}

export default Sidebar;
