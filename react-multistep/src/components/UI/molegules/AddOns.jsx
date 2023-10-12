import { CardHeader, CheckboxTemplate } from "../../../templates/CardTemplate";
function AddOns({ DataState }) {
  const {
    addOn1,
    setAddOn1,
    addOn2,
    setAddOn2,
    addOn3,
    setAddOn3,
    addOnData,
    monthly,
  } = DataState;

  const selectItem = (e) => {
    switch (parseInt(e.target.value)) {
      case 1:
        setAddOn1(!addOn1);
        break;
      case 2:
        setAddOn2(!addOn2);
        break;
      case 3:
        setAddOn3(!addOn3);
        break;
    }
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
          checked={addOn1}
          selectItem={selectItem}
        />
        <CheckboxTemplate
          name="addons"
          data={addOnData[1]}
          monthly={monthly}
          checked={addOn2}
          selectItem={selectItem}
        />
        <CheckboxTemplate
          name="addons"
          data={addOnData[2]}
          monthly={monthly}
          checked={addOn3}
          selectItem={selectItem}
        />
      </form>
    </div>
  );
}
export default AddOns;
