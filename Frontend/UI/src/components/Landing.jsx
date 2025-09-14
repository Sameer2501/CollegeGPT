//   import React from "react";
//   import RotatingText from "./Rotatingtext";
//   import Squares from "./Squares";
//   import ClickSpark from './ClickSpark';
//   import TextType from "./TextType";
//   import { useNavigate } from 'react-router-dom';
//   import Img from '../assets/sviett.png';

//   const Landing = () => {
//     const navigate = useNavigate();

//     return (
//       <div className="relative h-screen w-full overflow-hidden bg-black">
//         <ClickSpark
//           sparkColor="#ffffff"
//           sparkSize={30}
//           sparkRadius={20}
//           sparkCount={8}
//           duration={400}
//         >
//           {/* Background Animation */}
//           <div className="absolute inset-0 z-0">
//             <Squares
//               speed={0.5}
//               squareSize={40}
//               direction="diagonal"
//               borderColor="#5A5464"
//               hoverFillColor="#222"
//             />
//           </div>

//           {/* Main Content */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 pt-6 sm:pt-10">

//             {/* Logo */}
//             <div className="w-full mb-6">
//               {/* Desktop: top-left */}
//               <div className="hidden md:block absolute top-4 left-4">
//                 <img src={Img} alt="College Logo" className="w-[140px]" />
//               </div>

//               {/* Mobile: centered */}
//               {/* Mobile: centered */}
// <div className="block md:hidden mt-2 mb-6 absolute top-2 left-1/2 transform -translate-x-1/2">
//   <img src={Img} alt="College Logo" className="w-[80px]" />
// </div>

//             </div>

//             {/* Typing Text */}
//             <div className="min-h-[70px] sm:min-h-[90px] flex items-center justify-center">
//               <TextType
//                 text={["Welcome to CollegeGPT", "Ask Your Questions", "Ask Your Queries"]}
//                 typingSpeed={75}
//                 pauseDuration={1500}
//                 showCursor={true}
//                 cursorCharacter="|"
//                 className="text-xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg"
//               />
//             </div>

//             {/* Sub Text */}
//             <p className="text-sm sm:text-base md:text-xl mt-2 text-white">
//               Ask anything about your college
//             </p>

//             {/* Rotating Topics */}
//             <RotatingText
//               texts={[
//                 "placements",
//                 "academics",
//                 "courses",
//                 "admission criteria",
//                 "fees structure",
//                 "hostel facilities",
//                 "faculty",
//                 "campus life",
//               ]}
//               mainClassName=" px-8  sm:px-5 bg-white text-black py-2 rounded-lg text-base sm:text-lg md:text-xl font-medium mt-8"
//               staggerFrom="last"
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-120%" }}
//               staggerDuration={0.025}
//               splitLevelClassName="overflow-hidden"
//               transition={{ type: "spring", damping: 30, stiffness: 400 }}
//               rotationInterval={2000}
//             />

//             {/* Button */}
//             <button
//   onClick={() => navigate("/chat")}
//   className="mt-[90px] sm:mt-[80px] px-5 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-full shadow-lg transition duration-300"
// >
//   Get Started
// </button>

//           </div>
//         </ClickSpark>
//       </div>
//     );
//   };

//   export default Landing;
  import React from "react";
  import RotatingText from "./RotatingText";
  import ClickSpark from './ClickSpark';
  import TextType from "./TextType";
  import { useNavigate } from 'react-router-dom';
  import Img from '../assets/sviett.png';

import UpperImg from "../assets/up.jpg"
import bgMain from "../assets/bgmain.jpg"
  const Landing = () => {
    const navigate = useNavigate();

    return (
      <div className="relative h-screen w-full overflow-hidden bg-grey-400  "  >
          <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${bgMain})`,
      opacity: 0.3,
      zIndex: 0,
    }}
  />
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={30}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
        >
         
         

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-6 sm:pt-10">
           
            <div className="border-2 border-black w-full max-w-[700px] mx-auto flex flex-col items-center rounded-md px-4 sm:px-6 py-6 sm:py-8 ">
              <div>
                <img src={UpperImg} alt="College Logo" className="w-[190px] " />
              </div>

            {/* Logo */}
            <div className="w-full mb-6">
              {/* Desktop: top-left */}
              <div className="hidden md:block absolute top-4 left-4">
                <img src={Img} alt="College Logo" className="w-[140px]" />
              </div>

             
<div className="block md:hidden mt-2 mb-6 absolute top-2 left-1/2 transform -translate-x-1/2">
  <img src={Img} alt="College Logo" className="w-[80px]" />
</div>

            </div>

            {/* Typing Text */}
            <div className="min-h-[70px] sm:min-h-[90px] flex items-center justify-center text-blue-500 ">
              <TextType
                text={["Welcome to CollegeGPT", "Ask Your Questions", "Ask Your Queries"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-blue-500 text-xl sm:text-3xl md:text-5xl font-bold  "
              />
            </div>
            <p className="text-sm sm:text-base md:text-xl mt-2 text-black">
              Ask anything about your college
            </p>

            {/* Rotating Topics */}
            <RotatingText
              texts={[
                "placements",
                "academics",
                "courses",
                "admission criteria",
                "fees structure",
                "hostel facilities",
                "faculty",
                "campus life",
              ]}
              mainClassName=" px-8  sm:px-5 bg-blue-500 text-white py-2 rounded-lg text-base sm:text-lg md:text-xl font-medium mt-4"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />

            {/* Button */}
  

    <button
  onClick={() => navigate("/chat")}
  className="mt-[30px] sm:mt-[80px] px-5 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-full shadow-lg transition duration-300"
>
  Get Started
</button>
  

</div>

          </div>
        </ClickSpark>
      </div>
    );
  };

  export default Landing;
