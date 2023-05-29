import Box from "../shared/Box"
import blogimg1 from "./images/blog1.jpg"
import blogData from "./blogData"
const EssentialRead = () => {
    return (
        <div className="w-full">
            <section className="w-10/12 md:w-5/6 mx-auto">
                <div className="my-20">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Discover the best of the web</h1>
                    <h4 className="font-bold text-xl sm:text-2xl mt-2">Today’s essential reads</h4>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-20">
                        {
                            blogData.map((item) => {
                                return (
                                    <Box src={item.img} title={item.title} desc={item.desc} source={item.source} link={item.link} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default EssentialRead