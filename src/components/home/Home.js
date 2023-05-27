import DiscoverSection from "./DiscoverSection"
import Header from "./Header"
import RecomSection from "./RecomSection"
import StoriesSection from "./StoriesSection"
import VersionSection from "./Version Section"
import WorkSection from "./WorkSection"
import '../App.css'
const Home =()=>{
    return(
        <div>
            <Header />
            <RecomSection />
            <StoriesSection />
            <WorkSection />
            <VersionSection />
            <DiscoverSection />
        </div>
    )
}
export default Home