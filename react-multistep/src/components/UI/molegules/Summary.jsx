import { CardHeader } from "../../../templates/CardTemplate";
function Summary({ DataState }) {
  const { inputData, planData, addOnData, monthly } = DataState;

  const selectedPlan = planData.find((e) => e.id === inputData.plan);
  const addonIds = [];

  const selectedAddOns = addOnData;

  return (
    <div>
      <CardHeader
        header="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-row my-10">
        <div className="flex flex-row text-[#9699AB] bg-[#F0F6FF] w-full h-24 rounded-lg p-5">
          {/* Plan */}
          <div className="flex flex-row items-center justify-between w-full p-5 border-b">
            <div className="flex flex-col">
              <p className="text-[#02295A] font-[600] capitalize">
                <span>{selectedPlan.planName} </span>(
                {monthly ? "Monthly" : "Yearly"})
              </p>
              <p className="underline">Change</p>
            </div>
            <div className="text-[#02295A] font-[700]">
              $/{monthly ? "mo" : "yr"}
            </div>
          </div>

          {/* AddOns */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
