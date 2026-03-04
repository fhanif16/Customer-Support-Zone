import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaRegCircle } from "react-icons/fa";

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
     <div className={`badge badge-secondary justify-end ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}> <FaRegCircle /> {status}</div>
    
    </div>
   
    <p>{description}</p>
    <div className='flex justify-between'>
        <div className="flex gap-2">
      <div>{id}</div>
      <div className={`${priority ==="Critical" ? "text-red-700" : priority=== "High" ? "text-orange-700" : 'text-yellow-500' }`}>{priority}</div>
    </div>
    <div className="flex justify-around gap-2">
      <div>{ customer}</div>
      <SlCalender />
      <div> {createdAt}</div>
    </div>
    </div>
  </div>
</div>

      
    </div>




  )
}
