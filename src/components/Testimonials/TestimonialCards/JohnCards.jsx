import john from "../../../assets/john.svg"

const JohnCards = () => {
    return (
        <>
            <div className="flex w-[50%] h-[100%] p-[1.5rem] gap-5 bg-[#0C2645] rounded-[1.7rem]">
                <div className="text-left w-[50%] text-white font-bold">
                    <h4 className="mb-4">Starks Associate</h4>
                    <p className="mb-4">Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.
                    </p>
                    <p>John, Management</p>
                </div>
                <div className="w-[45%] h-[300px] bg-cover bg-center rounded-[1.2rem]" style={{backgroundImage: `url(${john})`}}>
                    
                </div>
            </div>
        </>
    )
}

export default JohnCards;
