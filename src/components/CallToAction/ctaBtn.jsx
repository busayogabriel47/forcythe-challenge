const CallToActionButton = ({ dirIcon }) => {
    // Check if the icon is provided
    const hasdirIcon = !!dirIcon;
  
    return (
      <>
        <div className="relative w-fit group">
          {/* Main button */}
          <button
            type="button"
            className={`relative z-10 rounded-full bg-white py-[12px] ${
              hasdirIcon ? "px-8" : "px-5"
            } flex items-center ${
              hasdirIcon ? "gap-2" : ""
            } cursor-pointer text-[#000] text-gray-400 hover:bg-[#064386] hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
          >
            Book a Call {dirIcon}
          </button>
  
          {/* Dashed border container */}
          <div
            className={`absolute top-0 left-[-5px] mt-2 z-0 rounded-full border-[1px] border-dashed border-gray-400 group-hover:border-[#064386] transition duration-300 ease-in-out`}
            style={{
              height: '50px', // Slightly reduced height to show the border below
              width: hasdirIcon ? 'calc(100% + 0px)' : 'calc(100% + 0px)', // Adjust width based on padding of the button
              
            }}
          ></div>
        </div>
      </>
    );
  };
  
  export default CallToActionButton;
  