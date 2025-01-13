import edwin  from "../../../assets/edwin.svg"


const StacCards = () => {
    return (
        <>
            <div className="flex w-[50%] h-[100%] p-[1.5rem] gap-5 bg-[#0C2645] rounded-[1.7rem]">
                <div className="text-left w-[50%] text-white font-bold">
                    <h4 className="mb-4">ExecutivePros</h4>
                    <p className="mb-4">The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!</p>
                    <p>Testimony, Co-founder</p>
                </div>
                <div className="w-[45%] h-[300px] bg-cover bg-center rounded-[1.2rem]" style={{backgroundImage: `url(${edwin})`}}>
                    
                </div>
            </div>
        </>
    )
}

export default StacCards;
