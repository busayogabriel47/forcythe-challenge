import CallToAction from "../../components/CallToAction/cta";
import ProductInnocation from "../../components/ProdInnovation";
import SportLight from "../../components/SportLight";
import SuccessInMotion from "../../components/SuccInMotn";
import Testimonials from "../../components/Testimonials/Testimonal";

const ctaBg = "https://forcythe.com/images/header-background.svg";

const LandingPage = () => {
  return (
    <div className="bg-[#030516] w-full">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center p-8"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <CallToAction />
      </div>
      <SuccessInMotion />
      <Testimonials />
      <SportLight/>
      <ProductInnocation/>
    </div>
  );
};

export default LandingPage;
