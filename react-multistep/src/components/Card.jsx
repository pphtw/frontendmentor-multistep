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
    <div className="w-1/3">
      <input
        className="hidden peer"
        type="radio"
        name={props.name}
        value={planItem.planName}
        id={planItem.planName}
        defaultChecked={props.selected}
      />
      <label
        htmlFor={planItem.planName}
        className="flex flex-col border p-5 rounded-md w-full h-48 hover:border-[#473DFF] peer-checked:border-[#473DFF] "
      >
        {/* <div className="flex flex-col border p-5 rounded-md h-48"> */}
        <div className="h-2/3">
          <img
            src={`/icon-${planItem.planName.toLowerCase()}.svg`}
            className="w-12"
          />
        </div>

        <div className="h/1/3">
          <p className="text-[#02295A] font-[700] capitalize">
            {planItem.planName}
          </p>
          <p>
            ${props.monthly ? planItem.monthBill : planItem.yearBill}/
            {props.monthly ? "mo" : "year"}
          </p>
        </div>
        {/* </div> */}
      </label>
    </div>
  );
}

function Plan() {
  const [monthly, setMonthly] = useState(true);
  const planData = [
    { planName: "arcade", monthBill: 9, yearBill: 90 },
    { planName: "advanced", monthBill: 12, yearBill: 120 },
    { planName: "pro", monthBill: 15, yearBill: 150 },
  ];
  return (
    <div>
      <CardHeader
        header="Select your plan"
        desc="You have the option of monthly or yearly billing."
      />

      <form>
        <div className="flex flex-row justify-between gap-x-5 my-10 w-full ">
          <OptionTemplate
            name="plan"
            plan={planData[0]}
            selected={true}
            monthly={monthly}
          />
          <OptionTemplate
            name="plan"
            plan={planData[1]}
            monthly={monthly}
            selected={false}
          />
          <OptionTemplate
            name="plan"
            plan={planData[2]}
            monthly={monthly}
            selected={false}
          />
        </div>
      </form>

      {/* toggle button */}
      <div className="flex flex-row items-center justify-center gap-x-10 bg-[#FAFBFF] p-3 w-full rounded-md">
        <div
          className={`text-base font-[700] ${
            monthly ? "text-[#02295A]" : "text-[#9699AB]"
          }`}
        >
          Monthly
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={() => setMonthly(!monthly)}
            type="checkbox"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#02295A] peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  "></div>
        </label>
        <div
          className={`text-base font-[700] ${
            !monthly ? "text-[#02295A]" : "text-[#9699AB]"
          }`}
        >
          Yearly
        </div>
      </div>
    </div>
  );
}

function BodyInformation(props) {
  switch (parseInt(props.progress)) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Plan />;
  }
}

function Card() {
  const [active, setActive] = useState(1);
  return (
    <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
      <Sidebar progress={active} />
      <div className="flex flex-col justify-between mx-20 h-full w-full">
        {/* each section progress */}
        <div className="flex flex-col">
          {active === 1 && <BodyInformation progress={1} />}
          {active === 2 && <BodyInformation progress={2} />}
          {active === 3 && <BodyInformation progress={3} />}
          {active === 4 && <BodyInformation progress={4} />}
          {active === 5 && <BodyInformation progress={5} />}
        </div>

        {/* button section */}
        <div className="flex flex-row justify-between self-end w-full mb-5">
          <button
            className={active === 1 ? "invisible" : "font-[400] text-[#9699AB]"}
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
            className={`bg-[#02295A] font-[400] text-white p-3 rounded-md w-1/4 hover:bg-[#101c2c] ease-linear duration-75 ${
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
