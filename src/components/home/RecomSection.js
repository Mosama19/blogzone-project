import recomImg from "../images/blogzone-list-mobile.png"
const RecomSection =()=>{
    return(
        <div className="w-full mt-20">
            <section className="flex flex-col justify-around items-center w-5/6 md:w-4/6 mx-auto md:flex-row gap-10">
                <div className="max-w-md flex-1 space-y-6 flex flex-col justify-center mr-[10%]">
                    <h1 className="font-bold text-3xl">Great recommendations — curated for you</h1>
                    <p className="text-xl">We comb the internet and surface the best articles out there — new perspectives, intriguing deep-dives, timeless classics — so you can find content worthy of your time.</p>
                </div>
                <div className="w-full md:w-1/2 flex-1">
                    <img src={recomImg} width={500} alt="list"/>
                </div>
            </section>
        </div>
    )
}
export default RecomSection