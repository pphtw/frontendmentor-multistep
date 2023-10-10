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
  const dataItem = props.plan;
  return (
    <div className="w-1/3">
      <input
        className="hidden peer"
        type="radio"
        name={props.name}
        value={dataItem.id}
        id={dataItem.id}
        defaultChecked={props.selected}
      />
      <label
        htmlFor={dataItem.id}
        className="flex cursor-pointer flex-col border p-5 rounded-md w-full h-48 hover:border-[#473DFF] peer-checked:border-[#473DFF] "
      >
        {/* <div className="flex flex-col border p-5 rounded-md h-48"> */}
        <div className="h-2/3">
          <img
            src={`/icon-${dataItem.planName.toLowerCase()}.svg`}
            className="w-12"
          />
        </div>

        <div className="h/1/3">
          <p className="text-[#02295A] text-lg font-[700] capitalize">
            {dataItem.planName}
          </p>
          <p>
            ${props.monthly ? dataItem.monthBill : dataItem.yearBill}/
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
    { id: 1, planName: "arcade", monthBill: 9, yearBill: 90 },
    { id: 2, planName: "advanced", monthBill: 12, yearBill: 120 },
    { id: 3, planName: "pro", monthBill: 15, yearBill: 150 },
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

function CheckboxTemplate(props) {
  const [checked, setchecked] = useState(false);
  const dataItem = props.data;
  return (
    <div className="flex flex-row w-full">
      <label
        htmlFor={dataItem.id}
        className={`flex flex-row p-5 peer justify-items-stretch w-full h-full items-center rounded-lg cursor-pointer border hover:border-[#473DFF] hover:bg-[#473DFF]/5 ${
          checked ? "bg-[#473DFF]/5 border-[#473DFF]" : ""
        } `}
      >
        <input
          className="w-5 h-5 rounded-lg peer accent-[#473DFF]"
          type="checkbox"
          name={props.name}
          id={dataItem.id}
          value={dataItem.id}
          required
          onClick={() => setchecked(!checked)}
        />

        <div className="w-full ml-5">
          <p className="text-lg text-[#02295A] font-[700]">{dataItem.addOn}</p>
          <p className="text-[#9699AB]">{dataItem.desc}</p>
        </div>
        <div className=" flex items-center justify-self-end">
          <p className="text-[#473DFF]">+{dataItem.month}/mo</p>
        </div>
      </label>
    </div>
  );
}

function AddOns() {
  const addOnData = [
    {
      id: 1,
      addOn: "Online service",
      desc: "Access to multiplayer games",
      month: 1,
      year: 10,
    },
    {
      id: 2,
      addOn: "Larger storage",
      desc: "Extra 1TB of cloud save",
      month: 2,
      year: 20,
    },
    {
      id: 3,
      addOn: "Customizable Profile",
      desc: "Custom theme on your profile",
      month: 1,
      year: 10,
    },
  ];
  return (
    <div>
      <CardHeader
        header="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <form className="flex flex-col gap-y-5 my-10 w-full ">
        <CheckboxTemplate name="addons" data={addOnData[0]} />
        <CheckboxTemplate name="addons" data={addOnData[1]} />
        <CheckboxTemplate name="addons" data={addOnData[2]} />
      </form>
    </div>
  );
}

function BodyInformation(props) {
  switch (parseInt(props.progress)) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Plan />;
    case 3:
      return <AddOns />;
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
