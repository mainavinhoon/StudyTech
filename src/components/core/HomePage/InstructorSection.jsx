import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/instructor.jpg";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="lg:w-[50%]">
            <img
              src={Instructor}
              alt=""
          
            />
          </div>
          
          <div className="lg:w-[100%] pl-40 flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become an <HighlightText text={" Instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[60%] text-richblack-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection