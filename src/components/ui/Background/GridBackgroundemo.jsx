import React from "react";
import { SparklesPreview } from "../Heading/Sparklesdemo"; // Ensure this import path is correct
import TextRevealDemo from "../textreveal/textreveal-demo";


export function GridBackgroundDemo() {
  return (
    <div className="h-100vh w-screen dark:bg-white bg-black  relative flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center relative z-10">
        <div className="mt-[2%]">
          <SparklesPreview />
        </div>
        <video
            className="h-[60%] w-[70%] ml-[-2%] mt-[2%] z-10"
            src="RgiptGlobe - Made with Clipchamp.mp4" // Verify the video file path
            autoPlay
            muted
            loop
          />
        <div className="flex flex-row justify-stretch items-centre w-full "> <div className=" flex flex-col ">
          <div className="flex flex-row gap-0">
          <img
          className="w-[5%] auto ml-[16%] mt-[2%]"  // Adjust image width and margin
          src="/Rajiv_Gandhi_Institute_of_Petroleum_Technology-removebg-preview.png"     // Replace with correct image path
          alt="RGIPT"
        />
            <h1
              className="text-transparent mt-[3%]  bg-clip-text bg-gradient-to-r from-white to-gray-900 font-bold text-4xl ml-[1%]"
            >
              About RGIPT!
            </h1>
          </div>
          <div className="flex flex-row gap-0">
          
          <h1
              className="text-transparent mt-[-4%] ml-[58%] bg-clip-text bg-gradient-to-r from-white to-gray-900 font-bold text-4xl ml-[10%]"
            >
              About URJOTSAV!
            </h1>
            <img
          className="w-[5%] h-auto mt-[-5%]"  // Adjust image width and margin
          src=" /uploadedManual-6540102a82d53_urjotsav_logo-removebg-preview.png"     // Replace with correct image path
          alt="RGIPT"
        /> 
          </div>

          <div className="mt-[-20%]"><TextRevealDemo />
          </div>
        </div>
        </div>
        
        
     </div>
    </div>
  );
}
