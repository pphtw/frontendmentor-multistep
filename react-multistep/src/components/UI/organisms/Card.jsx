import { useState, useMemo } from "react";
import Sidebar from "../molegules/Sidebar";
import PersonalInfo from "../molegules/PersonalInfo";
import Plan from "../molegules/Plan";
import AddOns from "../molegules/AddOns";
import Summary from "../molegules/Summary";

function BodyInformation({ MonthlyState, progress, textInputHandler }) {
  switch (parseInt(progress)) {
    case 1:
      return <PersonalInfo textInputHandler={textInputHandler} />;
    case 2:
      return <Plan MonthlyState={MonthlyState} />;
    case 3:
      return <AddOns MonthlyState={MonthlyState} />;
    case 4:
      return <Summary MonthlyState={MonthlyState} />;
  }
}

function Card() {
  const [active, setActive] = useState(1);
  const [monthly, setMonthly] = useState(true);
  const MonthlyState = {
    monthly,
    setMonthly,
  };

  const inputData = {
    name: "",
    email: "",
    phone: "",
    plan: 1,
    monthly: true,
    addons: [],
  };

  const textInputHandler = () => {};

  const progressOneHandler = () => {
    setActive(2);
  };

  const progressTwoHandler = () => {
    setActive(3);
  };

  const progressThreeHanler = () => {
    setActive(4);
  };

  const confirm = () => {};

  return (
    <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
      <Sidebar progress={active} />
      <div className="flex flex-col justify-between mx-20 h-full w-full">
        {/* each section progress */}
        <div className="flex flex-col">
          {active === 1 && (
            <BodyInformation
              progress={1}
              MonthlyState={MonthlyState}
              textInputHandler={textInputHandler}
            />
          )}
          {active === 2 && (
            <BodyInformation progress={2} MonthlyState={MonthlyState} />
          )}
          {active === 3 && (
            <BodyInformation progress={3} MonthlyState={MonthlyState} />
          )}
          {active === 4 && (
            <BodyInformation progress={4} MonthlyState={MonthlyState} />
          )}
          {active === 5 && (
            <BodyInformation progress={5} MonthlyState={MonthlyState} />
          )}
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
                ? progressOneHandler
                : active === 2
                ? progressTwoHandler
                : active === 3
                ? progressThreeHanler
                : confirm
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
