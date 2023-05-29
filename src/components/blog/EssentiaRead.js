import blogimg1 from "./images/blog1.jpg"
const EssentialRead = () => {
    return (
        <div className="w-full">
            <section className="w-5/6 md:w-4/6 mx-auto">
                <div className="my-20">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Discover the best of the web</h1>
                    <h4 className="font-bold text-xl sm:text-2xl mt-2">Today’s essential reads</h4>
                </div>
                <div>
                    <div>
                        <div className="w-96 h-96 bg-white shadow-sm border-2 rounded-2xl">
                            <img src={blogimg1} alt="blog1" className="rounded-tr-lg rounded-tl-lg"/>
                            <div className="mx-3">
                                <h1 className="font-semibold mt-4">Down the Rabbit Hole: Why People Fall for Conspiracy Theories</h1>
                                <p className="mt-2">And how to talk to those who have fallen for falsehoods.</p>
                            </div>
                            <div className="mx-3 mt-2 flex justify-between font-medium">
                                <div>News Literacy Project</div>
                                <div>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default EssentialRead