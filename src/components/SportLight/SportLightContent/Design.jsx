import CallToActionButton from "../../CallToAction/ctaBtn";

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

const Design = () => {

    return(
            <>
                <div className="my-[1.5rem] text-white">
                    <h1 className="text-[2rem] font-bold">Your vision is unique</h1>
                    <p className="my-[2rem]">Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.</p>

                    <CallToActionButton dirIcon={dirIcon}/>
                </div>
            </>
    )
}

export default Design;