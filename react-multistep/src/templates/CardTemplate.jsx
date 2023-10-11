import { useState } from "react";
import { useRef } from "react";

function CardHeader(props) {
  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <h1 className="text-marine-blue text-[#02295A] font-[700] text-3xl mb-2">
          {props.header}
        </h1>
        <p className="text-[#9699AB]">{props.desc}</p>
      </div>
    </div>
  );
}

function InputTemplate({ field, label, type, inputHandler, example, value }) {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex flex-row justify-between">
        <label htmlFor={field} className="capitalize font-[600] text-[#02295A]">
          {label}
        </label>
        <label
          htmlFor={field}
          className={`capitalize font-[600] text-[#ED3548] ${
            value.trim() === "" ? "" : "hidden"
          }`}
        >
          This field is required
        </label>
      </div>

      <input
        value={value}
        name={field}
        id={field}
        type={type}
        placeholder={example}
        className={`border border-[#9699AB] text-[#02295A] font-[600] rounded-lg h-12 p-5 mt-2 ${
          value.trim() === "" ? "border-[#ED3548]" : ""
        }`}
        onInput={inputHandler}
      />
    </div>
  );
}

function OptionTemplate({ plan, name, selected, monthly, selectPlan }) {
  const dataItem = plan;
  return (
    <div className="w-1/3">
      <input
        className="hidden peer"
        type="radio"
        name={name}
        value={dataItem.id}
        id={dataItem.id}
        defaultChecked={selected}
        onClick={selectPlan}
      />
      <label
        htmlFor={dataItem.id}
        className="flex cursor-pointer flex-col border p-5 rounded-md w-full h-48 hover:border-[#473DFF] peer-checked:border-[#473DFF] "
      >
        {/* <div className="flex flex-col border p-5 rounded-md h-48"> */}
        <div className="h-2/3">
          <img
            src={`/icon-${dataItem.planName.toLowerCase()}.svg`}
            className="w-12"
          />
        </div>

        <div className="h/1/3">
          <p className="text-[#02295A] text-lg font-[700] capitalize">
            {dataItem.planName}
          </p>
          <p>
            ${monthly ? dataItem.month : dataItem.year}/{monthly ? "mo" : "yr"}
          </p>
        </div>
        {/* </div> */}
      </label>
    </div>
  );
}

function CheckboxTemplate({ data, selectItem, name, monthly, checked }) {
  console.log(checked);
  // const [checked, setchecked] = useState(false);
  const dataItem = data;
  return (
    <div className="flex flex-row w-full">
      <label
        htmlFor={dataItem.id}
        className={`flex flex-row p-5 peer justify-items-stretch w-full h-full items-center rounded-lg cursor-pointer border hover:border-[#473DFF] hover:bg-[#473DFF]/5 ${
          checked ? "bg-[#473DFF]/5 border-[#473DFF]" : ""
        } `}
      >
        <input
          className="w-5 h-5 rounded-lg peer accent-[#473DFF]"
          type="checkbox"
          name={name}
          id={dataItem.id}
          value={dataItem.id}
          required
          onClick={selectItem}
        />

        <div className="w-full ml-5">
          <p className="text-lg text-[#02295A] font-[700]">{dataItem.addOn}</p>
          <p className="text-[#9699AB]">{dataItem.desc}</p>
        </div>
        <div className=" flex items-center justify-self-end">
          <p className="text-[#473DFF]">
            +${dataItem.month}/{monthly ? "mo" : "yr"}
          </p>
        </div>
      </label>
    </div>
  );
}

export { CheckboxTemplate, OptionTemplate, InputTemplate, CardHeader };
