import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import Footer from '../components/common/Footer'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
function Home() {
  return (
    <div >
       {/* section 1 */}

      <div className='ralative mx-auto md:flex w-11/12 items-center  justify-between '>

        <div className='md:w-[50%] flex flex-col gap-10'>
          <div className=' text-center text-4xl  font-semibold mt-7'> <p>Explore all the Coding Courses in one place with <HighlightText text={"Study Tech"}/></p></div>
          <div className=' W-[90%] mt-4  text-center text-lg '><p> StudyTech blends technology with education in order to nurture the next generation of leaders with problem solving skills, creativity, logical thinking, designing and coding abilities.</p></div>
          
          <div className='flex flex-row gap-7 mt-8 justify-around '>

             <CTAButton active={true} linkto={'/signup'} >Learn More</CTAButton>
             <CTAButton active={false} linkto={'/login'} >Book a Demo </CTAButton>
             
          </div>

        </div>

                              {/* Image section */}
        <div className=' md:visible mt-3 mr-10 '>
          <img src="https://img.freepik.com/premium-photo/cartoon-illustration-program-development-team-web-developer_1029679-20145.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_userhttps://img.freepik.com/premium-vector/programmer-developer-engineer-with-laptop-writing-code-computer-creates-software_530733-2701.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_user" alt=" human is coding" srcset="" />
           </div>

           
      </div>

       {/* section 2 */}

       <div className='ralative  md:flex  mx-auto  w-11/12 items-center  justify-between '>

          
                                  {/* COde animation section */}
          <div className=' md:w-fit overflow-none  hover:rotate-12 hover:transition-transform -translate-y-3 duration-400 ml-4 p-10 '>

            <CodeBlocks 
              codeBlock ={`<!DOCTYPE html>\n <html>\n <head>\n <title style="color:blue">YourWebsite</title>\n </head>\n <body>\n <p>I'm a paragraph</p>\n <h1> <a href="/">Header</a> </h1>\n </body>\n </html>`} 
              codeColor = {" text-yellow-300"}
              backgroundGradient={<div className=" bg-gradient-to-r from-indigo-500 via-purple to-pink-500 rounded-full absolute"></div>}
            />

          </div>


        <div className='md:w-[50%]  flex flex-col gap-10'>
          <div className=' text-center text-3xl  font-semibold mt-7'> <p> Unlock your <HighlightText text={"Coding Potential" }/> with our online courses,</p></div>
          <div className=' W-[90%] mt-4  text-center text-lg '><p> Our courses are designed and tought by Industry experts who have years of experience  in coding are passionate about sharing their knowledge with you.</p></div>
          
          <div className='flex flex-row gap-7 mt-8 justify-around '>

             <CTAButton active={true} linkto={'/signup'} >Try It Yourself</CTAButton>
             <CTAButton active={false} linkto={'/login'} >Learn More</CTAButton>
             
          </div>

        </div>

      </div>

       {/* section 3 */}


      <div className=' mt-9 pt-24 bg-pure-greys-5 text-richblack-700'>
        <div className=' bg-richblack-800  pb-20'>

        <div className=' animate-bounce flex w-fit x pl-[25%]  overflow-hidden rounded-full -mt-28 mr-10 '>
            <img className=' z-10 mt-32 ml-20  w-[30%] h-[30%] '  src="https://cdn.prod.website-files.com/5c755d7d6fa90eb3b727e726/61ddbad6a502f273f3268466_Screen1%201.png" alt=" human is coding" srcset="" />
            <img className=' z-0 -ml-32 w-[50%] h-[50%] ' src="https://cdn.prod.website-files.com/5c755d7d6fa90eb3b727e726/61ddb9c11dc66a3e8e44f7ae_Ninjuka%20with%20screens.png" alt=" human is coding" srcset="" />
          <img className=' z-10 mt-44 -ml-44  w-[30%] h-[30%] ' src="https://cdn.prod.website-files.com/5c755d7d6fa90eb3b727e726/61ddbad6a502f210bb268465_Screen2%201.png" alt=" human is coding" srcset="" />
        </div>
        <div className=' pl-[25%] border border-blue-50 rounded-[50%] w-[25%] h-9 ml-[35%]  -mt-14'>

        </div>

        </div>

        <div className=" p-12 md:p-20  pt-0 flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl   font-semibold md:w-[45%] ">
              Get the skills you need for a <HighlightText text={" job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className=" text-richblack-700  text-[18px]">
                The modern StudyTech is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>
        

        <div className=' ml-[15%]  mt-4'> <TimelineSection /></div>

      </div>

       


       {/* section 4 */}
      <div className='bg-pure-greys-5 md:pt-32 md:-mt-20 md:pb-11'>
        <InstructorSection/>
      </div>
      

       {/* Footer */}

       <Footer/>
        
    </div>
  )
}

export default Home