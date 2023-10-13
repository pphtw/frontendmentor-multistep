function Progress(props) {
  return (
    <div className="flex lg:flex-row lg:w-full items-center justify-center lg:justify-normal lg:mx-10 lg:my-5">
      <div
        className={`flex text-md font-bold lg:mr-5 border-2 justify-center items-center border-[#F0F6FF] rounded-full w-12 h-12 ${
          props.isActive ? "text-[#02295A] bg-[#F0F6FF]" : "text-[#F0F6FF]"
        }`}
      >
        {props.step}
      </div>
      <div className="lg:flex flex-col hidden">
        <h2 className="text-base font-[400] text-[#D6D9E6]">
          STEP {props.step}
        </h2>
        <h2 className="text-md font-[600] text-white">{props.progress}</h2>
      </div>
    </div>
  );
}

function Sidebar(props) {
  return (
    <div className="relative lg:bg-[url('/bg-sidebar-desktop.svg')] bg-[url('/bg-sidebar-mobile.svg')] lg:gap-0 gap-5 bg-cover flex lg:flex-col justify-center lg:justify-normal flex-row lg:w-1/2 w-full h-1/5 lg:h-full lg:rounded-lg bg-no-repeat lg:pt-10">
      <Progress isActive={props.progress == 1} step="1" progress="YOUR INFO" />
      <Progress
        isActive={props.progress == 2}
        step="2"
        progress="SELECT PLAN"
      />
      <Progress isActive={props.progress == 3} step="3" progress="ADD-ONS" />
      <Progress
        isActive={props.progress == 4 || props.progress == 5}
        step="4"
        progress="SUMMARY"
      />
    </div>
  );
}

export default Sidebar;
