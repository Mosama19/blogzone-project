import Button from "../shared/Button"
import headerImg from "../../components/images/blogzone-header.png"
const Header = () => {
    return (
        <div className="w-full">
            <header className="flex flex-col justify-center items-center w-full md:w-4/6 md:mx-auto md:flex-row">
                <div className="mt-20 md:mt-0">
                    <h4 className="font-bold text-2xl py-2">10 Years of BlogZone</h4>
                    <h1 className="font-bold text-[44px] max-w-xs">Get right to</h1>
                    <h1 className=" font-bold text-[44px] max-w-xs -mt-6">the good stuff</h1>
                    <p className="text-lg my-6">Your own private corner of the web to spend quality time with great articles.</p>
                    <div className="mb-10 md:mb-0">
                        <Button />
                    </div>
                </div>
                <div className="w-full">
                    <img src={headerImg} width={1000} alt="article"/>
                </div>
            </header>
        </div>
    )
}
export default Header