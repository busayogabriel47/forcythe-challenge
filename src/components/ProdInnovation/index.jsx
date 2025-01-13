import layer from "../../assets/layers-three.svg";
import Counter from "./Counter";

const ProductInnocation = () => {
  return (
    <div className="flex justify-center bg-custom-gradient h-[100vh]">
      <div className="w-[85%] pt-[5rem]">
        <div className="text-center">
          <h1 className="text-[#B3D0F2] text-[2rem] leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] sm:text-[2.2rem] sm:leading-[2.5rem]">
            Your best call for B2B/B2C product innovation
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 text-white mt-[2rem] gap-6">
          {["Experience", "Quick Support", "Cost Savings"].map((title, index) => (
            <div
              key={index}
              className="relative w-full md:w-[95%] rounded-2xl p-8 sm:p-10 bg-[#030516] overflow-hidden"
            >
              {/* Glowing Radial Gradient Border */}
              <div className="absolute inset-0 rounded-2xl border-[8px] border-transparent before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-radial before:from-blue-500 before:via-blue-300 before:to-transparent before:animate-move-light before:opacity-75 before:-z-10"></div>

              <div className="bg-[#3A6593] w-fit p-2 rounded-md">
                <img src={layer} alt="Layer Icon" />
              </div>

              <h2 className="my-[1.5rem] text-2xl font-medium">{title}</h2>
              <p className="text-[#948F99]">
                {index === 0
                  ? "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
                  : index === 1
                  ? "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."
                  : "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."}
              </p>
            </div>
          ))}
        </div>

        <Counter/>
      </div>
    </div>
  );
};

export default ProductInnocation;
