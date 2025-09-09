// export default function Footer(){
//     return(
//         <>
//             <div className="w-full fixed bottom-0 grid gap-2 md:grid-cols-3 md:px-3 pt-3  bg-black text-white">
//                 <div className=" text-white px-5">
//                     <h1 className="text-xl font-medium ">RentHouse</h1>
//                     <p>Your trusted platform for rental houses and rooms.</p>
//                     <p className="mt-2">Phone: +855 12 345 678</p>
//                     <p>Email: info@renthouse.com</p>
//                 </div>
//                 <div className="w-full py-3 text-center">
//                     <h1 className="text-center w-full font-medium text-xl ">Follow us</h1>
//                    <h1>
//                         <a className="" href="#">Tik Tok</a>
//                     </h1>
//                     <h1>
//                         <a className="" href="#">Facebook</a>
//                     </h1>
//                     <h1>
//                         <a className="" href="#">Instagram</a>
//                     </h1>
//                     <h1>
//                         <a className="" href="#">Telegram</a>
//                     </h1>
//                 </div>
//                 <div className=" h-[100px]  relative">
//                     <h1 className="text-xl font-medium">Contact </h1>
//                     <h1 >+855 81277517 | +855 81894543 </h1>

//                     <h1 className="absolute bottom-2 right-2"> © 2025 RentHouse.</h1>
//                 </div>
//             </div>
//         </>
//     )
// }
export default function Footer() {
  return (
    <footer className="bg-black bottom-0  text-white py-6 px-5 w-full md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">RentHouse</h2>
          <p className="mt-1 text-gray-300 text-sm">
            Your trusted platform for rental houses and rooms.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-orange-400">TikTok</a>
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Instagram</a>
            <a href="#" className="hover:text-orange-400">Telegram</a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h3 className="font-semibold mb-1">Contact</h3>
          <p>+855 81277517 | +855 81894543</p>
          <p className="mt-2 text-gray-400 text-xs">© 2025 RentHouse</p>
        </div>

      </div>
    </footer>
  );
}
