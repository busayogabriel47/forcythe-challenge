import CallToAction from "../../components/CallToAction/cta";
import ProductInnocation from "../../components/ProdInnovation";
import SportLight from "../../components/SportLight";
import SuccessInMotion from "../../components/SuccInMotn";
import Testimonials from "../../components/Testimonials/Testimonal";

const ctaBg = "https://forcythe.com/images/header-background.svg";

const LandingPage = () => {
  return (
    <div className="bg-[#030516] w-full">
      {/* Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center p-4 sm:p-8"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <CallToAction />
      </div>

      {/* Other Sections */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <SuccessInMotion />
        <Testimonials />
        <SportLight />
        <ProductInnocation />
      </div>
    </div>
  );
};

export default LandingPage;
