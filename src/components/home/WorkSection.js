import text from "../images/blogzone-text-icon.svg"
import listen from "../images/blogzone-audio-icon.svg"
import category from "../images/blogzone-tag-icon.svg"
import borderimg from "../images/blogzone-border.svg"
const WorkSection=()=>{
    return(
        <div className="w-full">
            <section className="w-4/6 mx-auto mt-44 mb-20">
                <h1 className="text-center font-bold text-2xl">Make BlogZone work for you</h1>
                <div className="flex flex-col gap-8 mt-16 justify-center md:flex-row">
                    <div className="md:max-w-xs text-xl font-medium">
                        <img src={text} width={45} alt="text"/>
                        <p>Tailor text sizes, font styles or viewing mode for focused reading.</p>
                    </div>
                    <div className="md:max-w-xs text-xl font-medium">
                        <img src={category} width={45} alt="categorize"/>
                        <p>Categorize saves with tags, and keep track of key passages with highlights.</p>
                    </div>
                    <div className="md:max-w-xs text-xl font-medium">
                        <img src={listen} width={45} alt="audio"/>
                        <p>Listen to articles on the BlogZone app with our audio playback option.</p>
                    </div>
                </div>
            </section>
            <div className="w-full my-10">
                <img src={borderimg} className="w-full h-6" alt="border"/>
            </div>
            
        </div>
    )
}
export default WorkSection