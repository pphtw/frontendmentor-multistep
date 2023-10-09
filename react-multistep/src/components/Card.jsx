import { Component, useState } from "react";
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
      <div>
        <CardHeader
          header="Personal info"
          desc="Please provide your name, email address, and phone number."
        />
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
      </div>
    );
  }
}

function OptionTemplate(props) {
  const planItem = props.plan;
  return (
    <div className="">
      <input
        className="hidden"
        type="radio"
        name={props.name}
        value={planItem.planName}
        htmlFor={planItem.planName}
        selected={props.selected}
      />
      <label htmlFor={planItem.planName}>
        <div className="flex flex-col border w-40 p-5 rounded-md h-48">
          <div className="h-2/3">
            <img
              src={`/icon-${planItem.planName.toLowerCase()}.svg`}
              className="w-12"
            />
          </div>

          <div className="h/1/3">
            <p className="text-[#02295A] font-[700]">{planItem.planName}</p>
            <p>${planItem.monthBill}/mo</p>
          </div>
        </div>
      </label>
    </div>
  );
}

class Plan extends Component {
  render() {
    const planData = [
      { planName: "Arcade", monthBill: 9, yearBill: 90 },
      { planName: "Advanced", monthBill: 12, yearBill: 120 },
      { planName: "Pro", monthBill: 15, yearBill: 150 },
    ];
    return (
      <div>
        <CardHeader
          header="Select your plan"
          desc="You have the option of monthly or yearly billing."
        />

        <form>
          <div className="flex flex-row justify-between my-10">
            <OptionTemplate name="plan" plan={planData[0]} selected={true} />
            <OptionTemplate name="plan" plan={planData[1]} />
            <OptionTemplate name="plan" plan={planData[2]} />
          </div>
        </form>
      </div>
    );
  }
}

function BodyInformation(props) {
  switch (parseInt(props.progress)) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Plan />;
  }
}

function Card(props) {
  const [active, setActive] = useState(1);
  return (
    <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
      <Sidebar progress={active} />
      <div className="w-2/3 flex flex-col mx-20">
        {active === 1 && <BodyInformation progress={1} />}
        {active === 2 && <BodyInformation progress={2} />}
        {active === 3 && <BodyInformation progress={3} />}
        {active === 4 && <BodyInformation progress={4} />}
        {active === 5 && <BodyInformation progress={5} />}

        <div className="flex flex-row justify-between">
          <button
            className={
              active === 1 ? "invisible" : "font-[400] p-3 w-1/5 text-[#9699AB]"
            }
            onClick={
              active === 2
                ? () => setActive(1)
                : active === 3
                ? () => setActive(2)
                : active === 4
                ? () => setActive(3)
                : () => setActive(5)
            }
          >
            Go Back
          </button>
          <button
            onClick={
              active === 1
                ? () => setActive(2)
                : active === 2
                ? () => setActive(3)
                : active === 3
                ? () => setActive(4)
                : () => setActive(5)
            }
            className={`bg-[#02295A] font-[400] text-white p-3 rounded-md w-1/5 hover:bg-[#101c2c] ease-linear duration-75 ${
              active === 1 ? "justify-self-end" : ""
            } `}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
