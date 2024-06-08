import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[70%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
                
              <div className="flex flex-col lg:gap-3" key={i}>
                <div></div>
                <div className="flex gap-6" key={i}>
                  <div className="w-[62px] h-[62px] bg-white rounded-full flex justify-center items-center shadow-2xl hover:scale-95 shadow-black">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div >
                    <h2 className="font-semibold text-yellow-100  text-[18px]">{ele.Heading}</h2>
                    <p className=" w-full ">{ele.Description}</p>
                  </div>
                </div>
                
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-20 border-dotted border-r border-richblack-100 mt-3 w-[32px]`}
                ></div>
              </div>
            );
          })}
        </div>
      
      </div>
    </div>
  );
};

export default TimelineSection;