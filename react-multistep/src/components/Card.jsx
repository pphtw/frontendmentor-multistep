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
    </div>
  );
}

function InputTemplate(props) {
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor={props.field}
        className="capitalize font-[400] text-[#02295A]"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.example}
        className="border border-[#9699AB] rounded-lg h-12 p-5 mt-2"
      />
    </div>
  );
}

class PersonalInfo extends Component {
  render() {
    return (
      <div className="flex flex-col my-10">
        <form>
          <InputTemplate
            field="name"
            label="name"
            type="text"
            example="e.g. Stephen King"
          />
          <InputTemplate
            field="email"
            label="email address"
            type="email"
            example="e.g. stephenking@lorem.com"
          />
          <InputTemplate
            field="phone"
            label="phone number"
            type="text"
            example="e.g. +1 234 567 890"
          />
        </form>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
        <Sidebar />
        <div className="w-2/3 flex flex-col mx-20">
          <CardHeader
            header="Personal info"
            desc="Please provide your name, email address, and phone number."
          />
          <PersonalInfo />

          <button className="bg-[#02295A] text-white p-3 rounded-md w-1/5 place-self-end">
            Next Step
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
