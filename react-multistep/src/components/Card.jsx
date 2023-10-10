import { Component, useState, useReducer } from "react";
import Sidebar from "./Sidebar";
import {
  CheckboxTemplate,
  OptionTemplate,
  InputTemplate,
  CardHeader,
} from "../templates/CardTemplate";

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

function Plan() {
  const [monthly, setMonthly] = useState(true);
  const planData = [
    { id: 1, planName: "arcade", month: 9, year: 90 },
    { id: 2, planName: "advanced", monthBill: 12, year: 120 },
    { id: 3, planName: "pro", month: 15, year: 150 },
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
