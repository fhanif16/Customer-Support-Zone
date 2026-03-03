import React from 'react'
import TicketCard from './TicketCard'
import TaskStatus from './TaskStatus'
import TaskResolved from './TaskResolved'

export default function TicketCards({tickets , handleTask , task , handleResolved,resolvedTask  }) {
    console.log(task)
    

  return (
    <div className='grid grid-cols-12 gap-4'>

        <div className="col-span-12 lg:col-span-9">
            <h1 className='text-2xl ml-6 mt-6'>Customer Tickets</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
            

            {tickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} handleTask={handleTask} />
          ))}
           


            

           </div>

        </div>

        <div className="col-span-12 lg:col-span-3">
            <div>
                <h1 className='text-2xl ml-6 mt-6'>Task Status</h1>
            <TaskStatus task={task} handleResolved={handleResolved}></TaskStatus>
            </div>
            
           <div>
            <h1 className='text-2xl ml-6 mt-6'>Resolved Task</h1>
            <TaskResolved  resolvedTask ={resolvedTask }></TaskResolved>
           </div>
             

        </div>
      
    </div>
  )
}
