import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import Idea from "./SportLightContent/Idea";
import camera from "../../assets/camera-man.svg";
import plan from "../../assets/plan-design.svg";
import planDevlop from "../../assets/plan-develop.svg"
import planLauch from "../../assets/plan-launch.svg"



const SportLightTab = () => {
    const tabs = ["Idea", "Design", "Develop", "Launch"];

    // Map tabs to both content and images
    const tabContent = {
        Idea: {
            content: <Idea />,
            image: camera,
        },
        Design: {
            content: <Idea />,
            image: plan,
        },
        Develop: {
            content: <Idea />,
            image: planDevlop,
        },
        Launch: {
            content: <Idea />,
            image: planLauch,
        }
    };

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [tabs.length]);

    return (
        <div className="w-full">
            {/* Tabs Navigation */}
            <div className="w-[50%] text-sm font-medium text-center text-gray-500 border-[3px] border-[#B3D0F2] p-[0.8rem] rounded-full mt-[2rem]">
                <ul className="flex justify-center w-full gap-5">
                    {tabs.map((tab, index) => (
                        <li key={index} className="w-[25%] text-white">
                            <button
                                className={`inline-block p-4 rounded-t-lg ${
                                    activeTab === index
                                        ? "text-[#000] border-[2px] border-[#B3D0F2] rounded-2xl bg-[#B3D0F2] px-[4rem] dark:text-blue-500 dark:border-blue-500"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                }`}
                                disabled={tab === "Disabled"}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content and Image */}
            <motion.div 
                className="flex flex-row md:flex-row bg-[#030516] w-full mt-4 p-4 gap-[2rem]"
                key={activeTab} // Ensures animation runs when the activeTab changes
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
            >
                {/* Left Column: Tab Content */}
                <div className="w-[45%] text-left pt-[1rem]">
                    <div className="flex justify-center w-full">
                        {tabContent[tabs[activeTab]].content}
                    </div>
                </div>

                {/* Right Column: Tab Image */}
                <div className="w-[50%] flex justify-center items-center text-center mt-[-9%]">
                    <img 
                        src={tabContent[tabs[activeTab]].image} 
                        alt={`Tab ${tabs[activeTab]} Image`} 
                        className="max-w-[55%] h-auto" 
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default SportLightTab;