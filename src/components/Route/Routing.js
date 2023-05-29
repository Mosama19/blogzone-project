import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Blog from '../blog/Blog'
import NavBar from '../shared/NavBar'
import Signup from "../login/signUp"
import Aboutusfile from '../aboutUs/aboutusFile'
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<Aboutusfile />} />    
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing