import { useState } from "react";
import { CardHeader, InputTemplate } from "../../../templates/CardTemplate";

function PersonalInfo({ DataState }) {
  const { data, setData } = DataState;

  const personalData = {
    name: "",
    email: "",
    phone: "",
    plan: 1,
    monthly: true,
    addons: [],
  };

  const setDataHandler = (e) => {
    switch (e.target.name) {
      case "name":
        personalData.name = e.target.value;

        break;
      case "email":
        personalData.email = e.target.value;

        break;
      case "phone":
        personalData.phone = e.target.value;

        break;
    }
    setData(personalData);

    // console.log(data);
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
            DataState={DataState}
            field="name"
            label="name"
            type="text"
            example="e.g. Stephen King"
            inputHandler={setDataHandler}
          />
          <InputTemplate
            DataState={DataState}
            field="email"
            label="email address"
            type="email"
            example="e.g. stephenking@lorem.com"
            inputHandler={setDataHandler}
          />
          <InputTemplate
            DataState={DataState}
            field="phone"
            label="phone number"
            type="text"
            example="e.g. +1 234 567 890"
            inputHandler={setDataHandler}
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
