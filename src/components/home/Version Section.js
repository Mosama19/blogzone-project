import Button from "../shared/Button"
import borderimg from "../images/blogzone-border.svg"

const VersionSection =()=>{
    return (
        <div className="w-full my-20">
            <section className="flex flex-col md:flex-row justify-between items-center w-4/6 mx-auto gap-10">
                <div className="flex-1 max-w-xs">
                    <h1 className="font-bold text-4xl">Start with the best version of BlogZone</h1>
                    <p className="text-lg mt-10">Pocket Premium is an ad-free space for you 
                        to focus on stories at your own pace. With 
                        a premium account, you get:</p>
                </div>
                <div className="flex-1 max-w-xs text-xl">
                    <li>Permanent library of your saves, even if they 
                        disappear from the web</li>
                    <li>Suggested tags</li>
                    <li>Full-text search</li>
                    <li>Unlimited highlights</li>
                    <li className="mb-10">Premium fonts</li>
                    <Button />
                </div>
            </section>
            <div className="w-full my-10">
                <img src={borderimg} className="w-full h-6" alt="border"/>
            </div>
        </div>
    )
}
export default VersionSection