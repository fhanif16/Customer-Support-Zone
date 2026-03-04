import React from 'react'

import logo from './../../assets/assets/vector1.png'

export default function Banner({task , resolvedTask}) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2' >


        <div className=' h-[200px]' style={{ backgroundImage: `url(${logo}), linear-gradient(to right, #632EE3, #9F62F2)`} } >
          <div className='text-center m-16'>
            <h1>In-Progress</h1>
            <p>{task.length}</p>
          </div>


          
             

       


        </div>


        <div className=' h-[200px]' style={{ backgroundImage: `url(${logo}), linear-gradient(to right, #54CF68, #00827A)`} } >
          <div className='text-center m-16'>
            <h1>Resolved</h1>
            <p>{resolvedTask.length}</p>
          </div>


          
             

       


        </div>
      

       
      
    </div>
  )
}
