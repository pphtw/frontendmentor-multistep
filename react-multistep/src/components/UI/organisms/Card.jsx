import { useState, useEffect } from "react";
import Sidebar from "../molegules/Sidebar";
import PersonalInfo from "../molegules/PersonalInfo";
import Plan from "../molegules/Plan";
import AddOns from "../molegules/AddOns";
import Summary from "../molegules/Summary";
import DataService from "../../../lib/dataService";

const dataService = new DataService();

function BodyInformation({ progress, DataState, FieldState }) {
  switch (parseInt(progress)) {
    case 1:
      return <PersonalInfo DataState={DataState} FieldState={FieldState} />;
    case 2:
      return <Plan DataState={DataState} />;
    case 3:
      return <AddOns DataState={DataState} />;
    case 4:
      return <Summary DataState={DataState} />;
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
    addOn1: false,
    addOn2: false,
    addOn3: false,
  };

  const [inputData, setInputData] = useState(dataTemplate);

  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [phoneInput, setPhone] = useState("");
  const [plan, setPlan] = useState(1);
  const [addOn1, setAddOn1] = useState(false);
  const [addOn2, setAddOn2] = useState(false);
  const [addOn3, setAddOn3] = useState(false);
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
    addOn1,
    setAddOn1,
    addOn2,
    setAddOn2,
    addOn3,
    setAddOn3,
    inputData,
    planData,
    addOnData,
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
    inputData.addOn1 = addOn1;
    inputData.addOn2 = addOn2;
    inputData.addOn3 = addOn3;
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
            <BodyInformation progress={4} DataState={DataState} />
          )}
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
