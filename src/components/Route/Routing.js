import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Blog from '../blog/Blog'
import NavBar from '../shared/NavBar'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing