const Footer =()=>{
    return(
        <div className="w-full bg-[#f9f9fa]">
            <footer className="w-4/6 mx-auto list-none flex justify-around md:justify-center">
                <nav className="flex flex-col justify-center items-center gap-10 lg:flex-row mt-20 mr-10">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Explore</li>
                    <li>Publishers</li>
                    <li>Developers</li>
                </nav>
                <nav className="flex flex-col justify-center items-center gap-10 lg:flex-row mt-20">
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Cookie preferences</li>
                    <li>Support</li>
                    <li>Jobs</li>
                </nav>
            </footer>
            <div className="flex justify-center items-center mt-10 gap-4">
                <div>
                    <svg class="svg-social twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28px" height="28px">
                    <title>Twitter</title>
                    <path d="M9.55,23.75a13.92,13.92,0,0,0,14-14c0-.21,0-.42,0-.64A9.9,9.9,0,0,0,26,6.56a10.24,10.24,0,0,1-2.83.77,5,5,0,0,0,2.17-2.72A10.08,10.08,0,0,1,22.21,5.8a4.93,4.93,0,0,0-8.39,4.49A14,14,0,0,1,3.67,5.15a4.92,4.92,0,0,0,1.52,6.57A4.73,4.73,0,0,1,3,11.1v.07a4.91,4.91,0,0,0,4,4.82,4.9,4.9,0,0,1-2.22.09,4.93,4.93,0,0,0,4.6,3.42,9.92,9.92,0,0,1-6.12,2.11A9.18,9.18,0,0,1,2,21.54a14,14,0,0,0,7.55,2.21"></path>
                    </svg>
                </div>
                <div>
                    <svg class="svg-social facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28px" height="28px">
                    <title>facebook</title>
                    <path d="M24.78,1.88H3.22A1.34,1.34,0,0,0,1.88,3.22V24.78a1.34,1.34,0,0,0,1.34,1.34H14.84V16.75H11.68V13.08h3.16v-2.7c0-3.13,1.91-4.84,4.7-4.84.94,0,1.88,0,2.82.14V9H20.44c-1.53,0-1.82.71-1.82,1.78v2.33h3.63l-.47,3.67H18.6v9.38h6.18a1.34,1.34,0,0,0,1.34-1.34h0V3.22a1.34,1.34,0,0,0-1.34-1.34Z"></path>
                    </svg>
                </div>
            </div>
            <div className="text-center mt-10">© 2023 BlogZone Copyright</div>
        </div>
    )
}
export default Footer