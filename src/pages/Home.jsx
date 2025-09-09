import New from "../components/New";
import Slidebar from "../components/Slidebar";

export default function Home(){
    return(
        <>
           <div className="px-1 py-2  ">
             <Slidebar/>
             <New/>
           </div>
        </>
    )
}