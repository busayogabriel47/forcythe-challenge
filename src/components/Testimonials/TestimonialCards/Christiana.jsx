import christina from "../../../assets/christina.svg"

const Christiana = () => {
    return (
        <>
            <div className="flex w-[50%] h-[100%] p-[1.5rem] gap-5 bg-[#0C2645] rounded-[1.7rem]">
                <div className="text-left w-[50%] text-white font-bold">
                    <h4 className="mb-4">Beaupreneur</h4>
                    <p className="mb-4">The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.
                    </p>
                    <p>Christiana, Founder</p>
                </div>
                <div className="w-[45%] h-[300px] bg-cover bg-center rounded-[1.2rem]" style={{backgroundImage: `url(${christina})`}}>
                    
                </div>
            </div>
        </>
    )
}

export default Christiana;
