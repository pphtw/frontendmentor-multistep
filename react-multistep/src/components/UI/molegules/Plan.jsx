import { CardHeader, OptionTemplate } from "../../../templates/CardTemplate";

function Plan({ DataState }) {
  const { plan, setPlan, planData, monthly, setMonthly } = DataState;

  return (
    <div>
      <CardHeader
        header="Select your plan"
        desc="You have the option of monthly or yearly billing."
      />

      <form>
        <div className="flex flex-row justify-between gap-x-5 my-10 w-full ">
          {planData.map((item, index) => (
            <OptionTemplate
              key={index}
              name="plan"
              plan={item}
              selected={plan === item.id}
              monthly={monthly}
              selectPlan={() => setPlan(item.id)}
              required
            />
          ))}
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
