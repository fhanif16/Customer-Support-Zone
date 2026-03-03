import React from 'react'

import logo from './../../assets/assets/vector1.png'

export default function Banner({task , resolvedTask}) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2' >


        <div className='bg-blue-500 h-[200px]' style={{backgroundImage:`url(${logo})`} } >
          <div className='text-center m-16'>
            <h1>In-Progress</h1>
            <p>{task.length}</p>
          </div>


          
             

       


        </div>


        <div className='bg-green-500 h-[200px]' style={{backgroundImage:`url(${logo})`} } >
          <div className='text-center m-16'>
            <h1>Resolved</h1>
            <p>{resolvedTask.length}</p>
          </div>


          
             

       


        </div>
      

       
      
    </div>
  )
}
