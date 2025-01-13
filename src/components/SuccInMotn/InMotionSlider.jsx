import africaFund from "../../assets/africaFund.svg";
import execPro from "../../assets/exec-pro.svg";
import activity from "../../assets/activity.svg";
import phone from "../../assets/phone.svg";
import stac from "../../assets/stac.svg";
import starks from "../../assets/starks.svg";

const InMotionSlider = () => {
  const images = [africaFund, phone, execPro, activity, stac, starks];

  return (
    <div className="">
      {/* Top row slider */}
      <div className="flex animate-slide-left">
        {images.concat(images).map((image, index) => (
          <div key={`top-${index}`} className="flex-shrink-0">
            <img src={image} alt=""  />
          </div>
        ))}
      </div>

      {/* Bottom row slider */}
      <div className="flex animate-slide-right">
        {images.concat(images).map((image, index) => (
          <div key={`bottom-${index}`} className="flex-shrink-0">
            <img src={image} alt=""  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InMotionSlider;
