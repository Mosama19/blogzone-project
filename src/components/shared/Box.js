import {CiBookmarkPlus} from 'react-icons/ci'
const Box = (props) => {
    const { src,title,desc,source,link } = props;
    return (
        <a href={link} target='_blank'>
        <div className="w-full bg-white shadow-sm my-2 border-2 rounded-2xl  md:hover:shadow-2xl cursor-pointer">
            <div className="flex flex-row md:flex-col">
                <img src={src} alt="blog1" className="rounded-xl w-4/12 h-3/12 m-2 md:m-0 md:w-full md:rounded-none md:rounded-t-xl" />
                <div>
                    <div className="mx-3">
                        <h1 className="font-semibold mt-4">{title}</h1>
                        <p className="mt-2">{desc}</p>
                    </div>
                    <div className="mx-3 mt-2 flex justify-between font-medium md:mb-2">
                        <div>{source}</div>
                        <div className='flex cursor-pointer'>
                            <CiBookmarkPlus size={24}/>
                            <div>Save</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
}
export default Box