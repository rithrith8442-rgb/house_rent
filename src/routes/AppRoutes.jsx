import { BrowserRouter , Route , Routes  } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Notfound from "../404/Notfound"
export default function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* 404 route */}
                    <Route path="*" element={<Notfound/>} />

                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}