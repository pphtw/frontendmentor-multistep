import { CardHeader } from "../../../templates/CardTemplate";
function Summary({ DataState, changePlan }) {
  const { inputData, planData, addOnData, monthly } = DataState;

  const selectedPlan = planData.find((e) => e.id === inputData.plan);
  const selectedAddOns = addOnData.filter((addon) =>
    inputData.addOns.some((e) => addon.id == e)
  );

  let total = monthly
    ? selectedPlan.month +
      selectedAddOns.reduce((sum, cur) => cur.month + sum, 0)
    : selectedPlan.year +
      selectedAddOns.reduce((sum, cur) => cur.year + sum, 0);

  return (
    <div>
      <CardHeader
        header="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col my-10 text-[#9699AB]">
        <div className="flex flex-col  bg-[#F0F6FF] w-full rounded-lg px-5">
          {/* Plan */}
          <div className="flex flex-row items-center justify-between py-5 w-full">
            <div className="flex flex-col">
              <p className="text-[#02295A] font-[600] capitalize">
                <span>{selectedPlan.planName} </span>(
                {monthly ? "Monthly" : "Yearly"})
              </p>
              <p className="underline">
                <span
                  className="cursor-pointer hover:text-[#473DFF]"
                  onClick={changePlan}
                >
                  Change
                </span>
              </p>
            </div>
            <div className="text-[#02295A] font-[700]">
              ${selectedPlan.month}/{monthly ? "mo" : "yr"}
            </div>
          </div>

          {/* AddOns */}
          <div
            className={`flex flex-col gap-3 py-5 ${
              selectedAddOns.length === 0 ? "hidden" : " border-t"
            }`}
          >
            {selectedAddOns.map((item, index) => (
              <div
                className="flex flex-row justify-between items-center"
                key={index}
              >
                <p>{item.addOn}</p>
                <p className="text-[#02295A]">
                  +{monthly ? item.month : item.year}/{monthly ? "mo" : "yr"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 flex flex-row justify-between items-center">
          <p>Total (per {monthly ? "month" : "year"})</p>
          <p className="text-[#473DFF] text-2xl font-[600]">+${total}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
