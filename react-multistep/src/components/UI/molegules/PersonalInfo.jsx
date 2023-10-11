import { useState } from "react";
import { CardHeader, InputTemplate } from "../../../templates/CardTemplate";

function PersonalInfo({ DataState }) {
  const { nameInput, setName, emailInput, setEmail, phoneInput, setPhone } =
    DataState;

  const setDataHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
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
            value={nameInput}
            field="name"
            label="name"
            type="text"
            example="e.g. Stephen King"
            inputHandler={setDataHandler}
          />
          <InputTemplate
            value={emailInput}
            field="email"
            label="email address"
            type="email"
            example="e.g. stephenking@lorem.com"
            inputHandler={setDataHandler}
          />
          <InputTemplate
            value={phoneInput}
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
