import React from 'react'

export default function TaskResolved({resolvedTask }) {
  return (
    <div className="p-4 space-y-2">
        <h1>{resolvedTask.length === 0 && <p className="text-md text-gray-500  ml-2">No Task Resolved</p>}</h1>
      {resolvedTask .map(t => (
        <div key={t.id} className=" bg-white border-2 p-4">
          <h1 className="text-sm font-medium">{t.title}</h1>
          
        </div>
        

        
      ))}
      
    </div>
  )
}
