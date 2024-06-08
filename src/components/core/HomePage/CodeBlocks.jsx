import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const CodeBlocks = ({codeBlock,codeColor,backgroundGradient}) => {
  return (
    <div className='h-fit shadow-lg shadow-pink-300 flex flex-row p-2 sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]'>
        {backgroundGradient}
        <div className='text-centre pr-3  flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
            <p>4.</p>
            <p>5.</p>
            <p>6.</p>
            <p>7.</p>
            <p>8.</p>
            <p>9.</p>
            <p>10.</p>
        </div>
        <div className={`w-[90%]  flex flex-col gap-2 font-bold font-mono text-pretty ${codeColor}`}>
          
            <TypeAnimation 
            sequence={[codeBlock,1000,""]}
            repeat={Infinity}
            curser={true}
            style={{whiteSpace:"pre-line", display:"block", position:"relative"}}
            omitDeletionAnimation={true} />
        </div>
    </div>
  )
}

export default CodeBlocks