import SportLightTab from "./SportLightTab";

const SportLight = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[85%]">
                <div className="w-[50%]">
                    <h1 className="text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mt-12">
                        From <span className="text-[#60a6e7]">Spark</span> to <span className="text-[#60a6e7]">Spotlight:</span> we take you every step of the way to success.
                    </h1>
                </div>
                <div className="flex justify-center">
                    <SportLightTab />
                </div>
            </div>
        </div>
    );
};

export default SportLight;
