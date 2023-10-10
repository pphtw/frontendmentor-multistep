import { CardHeader, CheckboxTemplate } from "../../../templates/CardTemplate";
function AddOns({ MonthlyState }) {
  const { monthly } = MonthlyState;
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
        <CheckboxTemplate name="addons" data={addOnData[0]} monthly={monthly} />
        <CheckboxTemplate name="addons" data={addOnData[1]} monthly={monthly} />
        <CheckboxTemplate name="addons" data={addOnData[2]} monthly={monthly} />
      </form>
    </div>
  );
}
export default AddOns;
