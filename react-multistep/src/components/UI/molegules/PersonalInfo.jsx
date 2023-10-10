import { CardHeader, InputTemplate } from "../../../templates/CardTemplate";
import { useRef } from "react";

function PersonalInfo() {
  const personalData = useRef({
    name: "",
    email: "",
    phone: "",
  });

  const setData = () => {
    console.log(personalData);
  };

  return (
    <div>
      <CardHeader
        header="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col my-10">
        <form>
          <InputTemplate
            field="name"
            label="name"
            type="text"
            example="e.g. Stephen King"
            value={personalData.name}
            inputHandler={setData}
          />
          <InputTemplate
            field="email"
            label="email address"
            type="email"
            example="e.g. stephenking@lorem.com"
            value={personalData.email}
            inputHandler={setData}
          />
          <InputTemplate
            field="phone"
            label="phone number"
            type="text"
            example="e.g. +1 234 567 890"
            value={personalData.phone}
            inputHandler={setData}
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
