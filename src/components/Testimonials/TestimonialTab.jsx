import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import starks1 from "../../assets/starks1.svg";
import executivePros from "../../assets/executivePros Logo.svg";
import stacai from "../../assets/stacai.svg";
import iwaria from "../../assets/iwaria.svg";
import beaupreneur from "../../assets/Beaupreneur.svg";
import JohnCard from "./TestimonialCards/JohnCards";
import JohnCards from "./TestimonialCards/TestimonyCard";
import StacCards from "./TestimonialCards/StacCard";
import Iwaria from "./TestimonialCards/Iwaria";
import Christiana from "./TestimonialCards/Christiana";

const TestimonialTab = () => {
    const tabs = [
        { image: starks1, key: "Profile" },
        { image: executivePros, key: "Dashboard" },
        { image: stacai, key: "Settings" },
        { image: iwaria, key: "Contacts" },
        { image: beaupreneur, key: "Disabled" },
    ];

    const tabContent = {
        Profile: <JohnCard />,
        Dashboard: <JohnCards />,
        Settings: <StacCards />,
        Contacts: <Iwaria />,
        Disabled: <Christiana />
    };

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [tabs.length]);

    return (
        <div className="grid-cols grid-cols-2 w-full">
            <div className="w-[100%] text-sm font-medium text-center text-gray-500 border-[1px] border-[#06438C] rounded-full">
                <ul className="flex justify-center w-full gap-5">
                    {tabs.map((tab, index) => (
                        <li key={index} className="w-[25%]">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                    activeTab === index
                                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                }`}
                                disabled={tab.key === "Disabled"}
                                onClick={() => setActiveTab(index)}
                            >
                                <img
                                    src={tab.image}
                                    alt={`Tab ${index + 1}`}
                                    className={`h-10 w-[80%] ${activeTab === index ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Animated Tab content */}
            <motion.div 
                className="p-4"
                key={tabs[activeTab].key} // Use key to trigger animation on content change
                initial={{ opacity: 0, y: -20 }} // Initial state for animation
                animate={{ opacity: 1, y: 0 }} // Final state for animation
                exit={{ opacity: 0, y: 20 }} // Exit state for animation
                transition={{ duration: 0.3 }} // Animation duration
            >
                {tabContent[tabs[activeTab].key]}
            </motion.div>
        </div>
    );
};

export default TestimonialTab;
