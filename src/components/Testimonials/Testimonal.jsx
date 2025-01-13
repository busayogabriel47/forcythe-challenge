import TestimonialTab from "./TestimonialTab";

const Testimonials = () => {
    return (
      <div className="flex justify-center bg-[#030516]">
        <div className="w-[85%] text-center pt-[5rem]">
          <h1 className="text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
            Discover the <span className="text-[#60a6e7]">transformative stories</span> of startups that scaled new heights with us
          </h1>

          <div className="flex justify-center w-full">
              <TestimonialTab/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  