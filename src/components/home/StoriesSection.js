import storiesImg from "../../components/images/blogzone-colorful-books.svg"

const StoriesSection =()=>{
    return(
        <div className="w-full my-20">
            <section className="flex flex-col-reverse justify-between  w-5/6 md:w-4/6 mx-auto md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex-1">
                    <img src={storiesImg} width={500} alt="books"/>
                </div>
                <div className="max-w-md flex-1 space-y-6 flex flex-col justify-center">
                    <h1 className="font-bold text-3xl">Save interesting stories. Read them whenever.</h1>
                    <p className="text-xl">Stop sending yourself links. When you come across a long read, interview, think piece, even a recipe, save it to your personal library with the  button in your browser or with Pocket app.</p>
                </div>
            </section>
        </div>
    )
}
export default StoriesSection