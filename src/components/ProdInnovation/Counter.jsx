import React from "react";

const arc = "https://forcythe.com/images/arc.svg";

const Counter = () => {
  return (
    <div className="flex justify-center mt-[5rem]">
      {/* Main container with responsive background */}
      <div
        className="max-w-[52rem] mx-auto bg-top bg-no-repeat p-6 lg:py-12 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${arc})`, // Default background image
          backgroundSize: "contain", // Adjust to show the entire arc
          backgroundRepeat: "no-repeat",
          height: "500px", // Adjust height as needed
        }}
      >
        {/* Content Section */}
        <div className="text-center w-[50%]">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            We build solutions that help businesses of all sizes to scale
          </h1>

          {/* Counters Section */}
          <div className="flex justify-evenly sm:justify-between items-center gap-3 w-full">
            {/* Counter Items */}
            {[
              { count: "50+", label: "Clients" },
              { count: "120+", label: "Projects" },
              { count: "10+", label: "Team Leads" },
              { count: "10+", label: "Glorious Years" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] text-[#60A6E7] md:text-[3rem] text-accent font-medium">
                  {item.count}
                </div>
                <span className="text-[15px] text-[#fff] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
