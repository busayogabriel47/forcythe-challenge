import CallToActionButton from "./ctaBtn";

const dirIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-6 text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );


const CallToAction = () => {
  return (
    <>
      
        <div className="w-[85%] absolute top-0">
                <div className="bg-gray-300 bg-opacity-20 rounded-[2rem] p-5 py-8 md:p-8 lg:p-10">
                    <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] text-[#fff] leading-[1]">
                        We build <span className="text-[#60A6E7]">products</span> that shape a better future
                    </h1>
                    <p className="mt-4 text-[#8B8992] font-bold text-base md:text-lg mb-8 leading-7">
                        We’re the architects of digital excellence across industries.
                        We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.
                    </p>


                    <CallToActionButton dirIcon={dirIcon}/>
                </div>

                
        </div>
    
    </>
  );
};

export default CallToAction;
