import { CardHeader } from "../../../templates/CardTemplate";
function Summary({ DataState }) {
  const { inputData, planData, addOnData, monthly } = DataState;

  const selectedPlan = planData.find((e) => e.id === inputData.plan);
  const selectedAddOns = [];

  

  return (
    <div>
      <CardHeader
        header="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-row my-10">
        <div className="flex flex-row bg-[#F0F6FF] w-full h-24 rounded-lg p-5">
          <div>{selectedPlan.planName}</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
