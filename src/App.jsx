
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/header/Banner'
import Navbar from './components/header/Navbar'
import TicketCards from './components/ticketCard/TicketCards'
import Footer from './components/footer/Footer'
import Swal from 'sweetalert2'


function App() {
  const url = '/ticket.json'

  const [tickets , setTickets] = useState([])
  const[task , setTask] = useState ([])
   const[resolvedTask , setResolvedTasks] = useState ([])

  const handleTask = (tickets) => {
   const progressTask = task.find(t => t.id === tickets.id)
   if(!progressTask){
    setTask([...task, tickets])

     setTickets(prev =>
      prev.filter(t => t.id !== tickets.id)
    )

    
Swal.fire({
  title: "Task Added",
  icon: "success",
  draggable: true
})
 ;
   }

  
  }


 const handleResolved = (resolvedTask) => {
  const remainingTasks = task.filter(t => t.id !== resolvedTask.id)
  setTask(remainingTasks)
  setResolvedTasks(prev => [...prev, resolvedTask])
  Swal.fire({
  title: "Task Resolved",
  icon: "success",
  draggable: true
})
 ;

  
}

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>setTickets(data))
  }, [])


 

  return (
    < >

    <div className='ml-10 mr-10'>

       {/* header */}
    <Navbar></Navbar>
    <Banner task={task} resolvedTask={resolvedTask}></Banner>



    {/* card info */}
    <TicketCards tickets={tickets} handleTask={handleTask} task={task} handleResolved={handleResolved} resolvedTask ={resolvedTask }></TicketCards>



    {/* footer */}
    <Footer></Footer>

    </div>
   
    
   
    </>
  )
}

export default App
