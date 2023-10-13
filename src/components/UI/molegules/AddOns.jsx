import { CardHeader, CheckboxTemplate } from "../../../templates/CardTemplate";
function AddOns({ DataState }) {
  const { addOns, addOnData, monthly } = DataState;

  const addOrRemove = (e) => {
    let id = parseInt(e.target.value);
    if (e.target.checked) {
      addOns.push(id);
    } else {
      let index = addOns.findIndex((e) => e === id);
      addOns.splice(index, 1);
    }
  };

  return (
    <div>
      <CardHeader
        header="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <form className="flex flex-col gap-y-5 my-10 w-full ">
        {addOnData.map((addon, index) => (
          <CheckboxTemplate
            key={index}
            name="addons"
            data={addon}
            monthly={monthly}
            checked={addOns.some((e) => e === addon.id)}
            selectItem={addOrRemove}
          />
        ))}
      </form>
    </div>
  );
}
export default AddOns;
