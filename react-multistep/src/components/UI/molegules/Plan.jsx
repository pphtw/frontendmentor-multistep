import { CardHeader, OptionTemplate } from "../../../templates/CardTemplate";

function Plan({ MonthlyState, DataState }) {
  const { monthly, setMonthly } = MonthlyState;
  const { plan, setPlan } = DataState;

  const planData = [
    { id: 1, planName: "arcade", month: 9, year: 90 },
    { id: 2, planName: "advanced", month: 12, year: 120 },
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
            selected={plan === 1}
            monthly={monthly}
            selectPlan={() => setPlan(1)}
            required
          />
          <OptionTemplate
            name="plan"
            plan={planData[1]}
            monthly={monthly}
            selected={plan === 2}
            selectPlan={() => setPlan(2)}
            required
          />
          <OptionTemplate
            name="plan"
            plan={planData[2]}
            monthly={monthly}
            selected={plan === 3}
            selectPlan={() => setPlan(3)}
            required
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
            defaultChecked={!monthly}
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

export default Plan;
