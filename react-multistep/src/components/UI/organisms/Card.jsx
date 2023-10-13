import { useState, useEffect } from "react";
import Sidebar from "../molegules/Sidebar";
import PersonalInfo from "../molegules/PersonalInfo";
import Plan from "../molegules/Plan";
import AddOns from "../molegules/AddOns";
import Summary from "../molegules/Summary";
import DataService from "../../../lib/dataService";
import SubmitResponse from "../molegules/SubmitResponse";

const dataService = new DataService();

function BodyInformation({ progress, DataState, FieldState, changePlan }) {
  switch (parseInt(progress)) {
    case 1:
      return <PersonalInfo DataState={DataState} FieldState={FieldState} />;
    case 2:
      return <Plan DataState={DataState} />;
    case 3:
      return <AddOns DataState={DataState} />;
    case 4:
      return <Summary DataState={DataState} changePlan={changePlan} />;
    case 5:
      return <SubmitResponse />;
  }
}

function Card() {
  const [planData, setPlanData] = useState([]);
  const [addOnData, setAddOnData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const planFetch = await dataService.getData("planData");
      const addOnFetch = await dataService.getData("addOnData");
      setPlanData(planFetch);
      setAddOnData(addOnFetch);
    };
    fetchData();
  }, []);

  const [active, setActive] = useState(1);
  const [monthly, setMonthly] = useState(true);

  const dataTemplate = {
    name: "",
    email: "",
    phone: "",
    plan: 1,
    monthly: true,
    addOns: [],
  };

  const [inputData, setInputData] = useState(dataTemplate);

  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [phoneInput, setPhone] = useState("");
  const [plan, setPlan] = useState(1);
  const [addOns, setAddOns] = useState([]);
  const [firstTime, setFirstTime] = useState(true);

  const DataState = {
    monthly,
    setMonthly,
    nameInput,
    setName,
    emailInput,
    setEmail,
    phoneInput,
    setPhone,
    plan,
    setPlan,
    inputData,
    planData,
    addOnData,
    addOns,
    setAddOns,
  };

  const FieldState = { firstTime, setFirstTime };

  const progressOneHandler = () => {
    setFirstTime(false);
    if (
      nameInput.trim() === "" ||
      emailInput.trim() === "" ||
      phoneInput.trim() === ""
    ) {
      // console.log(console.error());
    } else {
      inputData.name = nameInput;
      inputData.email = emailInput;
      inputData.phone = phoneInput;

      setActive(2);
    }
  };

  const progressTwoHandler = () => {
    inputData.plan = plan;
    inputData.monthly = monthly;
    setActive(3);
  };

  const progressThreeHanler = () => {
    inputData.addOns = addOns;
    setActive(4);
  };

  const submitForm = async () => {
    const response = await dataService.addData(inputData);
    if (response === 201) {
      setActive(5);
    } else {
      console.error("SUBMIT FORM FAIL: PLEASE TRY AGAIN LATER");
    }
  };

  return (
    <div className="flex flex-row w-3/5 bg-white rounded-xl h-2/3 p-3">
      <Sidebar progress={active} />
      <div
        className={`flex flex-col justify-${
          active === 5 ? "center" : "between"
        } mx-20 h-full w-full`}
      >
        {/* each section progress */}
        <div className="flex flex-col">
          {active === 1 && (
            <BodyInformation
              progress={1}
              DataState={DataState}
              FieldState={FieldState}
            />
          )}
          {active === 2 && (
            <BodyInformation progress={2} DataState={DataState} />
          )}
          {active === 3 && (
            <BodyInformation progress={3} DataState={DataState} />
          )}
          {active === 4 && (
            <BodyInformation
              progress={4}
              DataState={DataState}
              changePlan={() => setActive(2)}
            />
          )}
          {active === 5 && <BodyInformation progress={5} />}
        </div>

        {/* button section */}
        <div className="flex flex-row justify-between self-end w-full mb-5">
          <button
            className={`hover:text-[#473DFF] ease-linear duration-75 font-[500] ${
              active === 1
                ? "invisible"
                : active === 5
                ? "hidden"
                : "font-[400] text-[#9699AB]"
            }`}
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
                : submitForm
            }
            className={`bg-[#02295A] font-[500] text-white p-3 rounded-md w-1/4 hover:bg-[#02295A]/90 ease-linear duration-75 ${
              active === 1
                ? "justify-self-end"
                : active === 4
                ? "bg-[#473DFF] hover:bg-[#473DFF]/80"
                : active === 5
                ? "hidden"
                : ""
            } `}
          >
            {active === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
