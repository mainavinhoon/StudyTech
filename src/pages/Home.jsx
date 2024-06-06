import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
function Home() {
  return (
    <div >
       {/* section 1 */}

      <div className='ralative mx-auto flex w-11/12 items-center  justify-between '>

        <div className='w-[50%] flex flex-col gap-10'>
          <div className=' text-center text-4xl  font-semibold mt-7'> <p>Explore all the Coding Courses in one place with <HighlightText text={"Study Tech"}/></p></div>
          <div className=' W-[90%] mt-4  text-center text-lg '><p> StudyTech blends technology with education in order to nurture the next generation of leaders with problem solving skills, creativity, logical thinking, designing and coding abilities.</p></div>
          
          <div className='flex flex-row gap-7 mt-8 justify-around '>

             <CTAButton active={true} linkto={'/signup'} >Learn More</CTAButton>
             <CTAButton active={false} linkto={'/login'} >Book a Demo </CTAButton>
             
          </div>

        </div>

                              {/* Image section */}
        <div className='mt-3 mr-10 '>
          <img src="https://img.freepik.com/premium-photo/cartoon-illustration-program-development-team-web-developer_1029679-20145.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_userhttps://img.freepik.com/premium-vector/programmer-developer-engineer-with-laptop-writing-code-computer-creates-software_530733-2701.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_user" alt=" human is coding" srcset="" />
           </div>

           
      </div>

       {/* section 2 */}

       <div className='ralative mx-auto flex w-11/12 items-center  justify-between '>

                                  {/* COde animation section */}
          <div className='mt-3 mr-10 '>
          <img src="https://img.freepik.com/premium-photo/cartoon-illustration-program-development-team-web-developer_1029679-20145.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_userhttps://img.freepik.com/premium-vector/programmer-developer-engineer-with-laptop-writing-code-computer-creates-software_530733-2701.jpg?size=626&ext=jpg&ga=GA1.1.1271323351.1704313206&semt=ais_user" alt=" human is coding" srcset="" />
          </div>


        <div className='w-[50%] flex flex-col gap-10'>
          <div className=' text-center text-3xl  font-semibold mt-7'> <p> Unlock your <HighlightText text={"Coding Potential" }/> with our online courses,</p></div>
          <div className=' W-[90%] mt-4  text-center text-lg '><p> Our courses are designed and tought by Industry experts who have years of experience  in coding are passionate about sharing their knowledge with you.</p></div>
          
          <div className='flex flex-row gap-7 mt-8 justify-around '>

             <CTAButton active={true} linkto={'/signup'} >Try It Yourself</CTAButton>
             <CTAButton active={false} linkto={'/login'} >Learn More</CTAButton>
             
          </div>

        </div>

   
           
      </div>





       {/* section 3 */}


       {/* section 4 */}


       {/* Footer */}
        
    </div>
  )
}

export default Home