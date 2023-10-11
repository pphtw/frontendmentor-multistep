import { CardHeader, CheckboxTemplate } from "../../../templates/CardTemplate";
import { useState } from "react";
function AddOns({ MonthlyState, DataState }) {
  const { monthly } = MonthlyState;
  const { addOns, setAddOns } = DataState;
  const [checked, setchecked] = useState(false);

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

  const selectItem = () => {
    setchecked(!checked);
  };

  return (
    <div>
      <CardHeader
        header="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <form className="flex flex-col gap-y-5 my-10 w-full ">
        <CheckboxTemplate
          name="addons"
          data={addOnData[0]}
          monthly={monthly}
          checked={checked}
        />
        <CheckboxTemplate
          name="addons"
          data={addOnData[1]}
          monthly={monthly}
          checked={checked}
        />
        <CheckboxTemplate
          name="addons"
          data={addOnData[2]}
          monthly={monthly}
          checked={checked}
        />
      </form>
    </div>
  );
}
export default AddOns;
