import React from 'react'

export default function TicketCard({ticket , handleTask}) {

   
    const {id, title, description, customer,priority, status,createdAt} = ticket

  
  return (
    <div >
        <div className="card bg-base-200 w-80 shadow-sm" onClick={()=> handleTask(ticket)}>
 
  <div className="card-body">
    <div className='flex justify-between'>
         <h2 className="card-title">
    {title}
     
    </h2>
     <div className={`badge badge-secondary justify-end ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}>{status}</div>
    
    </div>
   
    <p>{description}</p>
    <div className='flex justify-between'>
        <div className="flex gap-2">
      <div>{id}</div>
      <div>{priority}</div>
    </div>
    <div className="flex justify-between gap-2">
      <div>{ customer}</div>
      <div>{createdAt}</div>
    </div>
    </div>
  </div>
</div>

      
    </div>




  )
}
