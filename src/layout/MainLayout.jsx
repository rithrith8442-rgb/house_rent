import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import AppRoutes from "../routes/AppRoutes";

export default function MainLayout(){
    return(
        <>
            <Nav/>
                <AppRoutes/>
            
            <Footer/>
        </>
    )
}