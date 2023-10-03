import { Component } from "react";
import Sidebar from "./Sidebar";

function CardHeader(props) {
  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <h1 className="text-marine-blue text-[#02295A] font-[700] text-3xl mb-2">
          {props.header}
        </h1>
        <p className="text-[#9699AB]">{props.desc}</p>
      </div>

      {/* <div className="flex flex-col">
        <form>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="e.g. Stephen King" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" />
          </div>

          <button className="bg-[#02295A] text-white p-3 rounded-md">
            Next Step
          </button>
        </form>
      </div> */}
    </div>
  );
}

class Card extends Component {
  render() {
    return (
      <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
        <Sidebar />
        <div className="w-2/3 flex flex-col ">
          <CardHeader
            header="Personal info"
            desc="Please provide your name, email address, and phone number."
          />
        </div>
      </div>
    );
  }
}

export default Card;
