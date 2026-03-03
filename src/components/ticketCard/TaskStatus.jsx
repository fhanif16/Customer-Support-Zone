import React from 'react'

export default function TaskStatus({task , handleResolved}) {
    console.log(task)
   
  return (
    <div className="p-4 space-y-2">
      {task.map(t => (
        <div key={t.id} className=" bg-white border-2 p-4">
          <h1 className="text-sm font-medium">{t.title}</h1>
          <button className='btn bg-green-300 w-full mt-4' onClick={()=> handleResolved(t)  }>Complete</button>
        </div>
        

        
      ))}
      
    </div>
  )
}
