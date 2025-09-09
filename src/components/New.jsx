
import { useState } from "react";

function Card({ images }) {
  // default big image = first one
  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <div className="h-[300px] md:h-[350px] lg:h-[400px] p-2 shadow-sm rounded-lg">
      {/* Big Image */}
      <div className="w-full h-[60%]  bg-white rounded-lg overflow-hidden">
        <img
          src={bigImage}
          alt="preview"
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      {/* Small Images */}
      <div className="w-full p-[2px] rounded-lg my-1 border-2 border-blue-400 flex space-x-1">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setBigImage(img)}
            className="w-[40px] h-[40px] overflow-hidden bg-black rounded-lg cursor-pointer hover:opacity-80"
          >
            <img
              src={img}
              alt="thumb"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full p-2">
        <h1 className="text-xl font-medium">Title</h1>
        <h1>price $ <span>1500</span></h1>
      </div>
    </div>
  );
}

export default function New() {
  return (
    <div className="w-full my-3">
      {/* Header */}
      <div className="w-full flex px-5 pt-5">
        <div className="w-[50%]">
          <h1 className="text-3xl font-medium lg:text-4xl lg:font-bold">
            New
          </h1>
        </div>
        <div className="w-[50%] flex justify-end">
          <div className="w-[80%] md:w-[40%] lg:w-[30%] py-2 bg-white/0 border-2 border-blue-700 text-center rounded-[25px] hover:bg-blue-600 hover:text-white text-[17px] font-medium">
            view all new
          </div>
        </div>
        
      </div>
      <div className="w-full py-5 px-5">
            <div className="w-full h-[2px] bg-blue-500">

            </div>
        </div>

      {/* Cards */}
      <div className="w-full py-3 md:px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <Card images={["/house/home1.png", "/house/home3.png", "/house/home2.png"]} />
        <Card images={["/house/home2.png", "/house/home1.png", "/house/home3.png"]} />
        <Card images={["/house/home3.png", "/house/home2.png", "/house/home1.png"]} />
        <Card images={["/house/home1.png", "/house/home2.png", "/house/home3.png"]} />
      </div>
    </div>
  );
}
