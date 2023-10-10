import { CardHeader, InputTemplate } from "../../../templates/CardTemplate";
function PersonalInfo() {
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
          />
          <InputTemplate
            field="email"
            label="email address"
            type="email"
            example="e.g. stephenking@lorem.com"
          />
          <InputTemplate
            field="phone"
            label="phone number"
            type="text"
            example="e.g. +1 234 567 890"
          />
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
