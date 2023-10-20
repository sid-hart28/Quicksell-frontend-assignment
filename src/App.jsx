import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addStatusTickets } from './slices/statusSlice'
import { addUserTickets } from './slices/userSlice'
import { addPriorityTickets } from './slices/prioritySlice'
import { fetchTickets } from './api/fetchTickets'
import Spinner from './components/Spinner/Spinner'
import Navbar from './components/Navbar/Navbar'
import DashBoard from './components/DashBoard/DashBoard'

export default function App() {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async (dispatch) => {
    try {
      const { statusTickets, userTickets, priorityTickets, statusHeader, userHeader, priorityHeader } = await fetchTickets();
      dispatch(addStatusTickets({ headers: statusHeader, tickets: statusTickets }));
      dispatch(addUserTickets({ headers: userHeader, tickets: userTickets }));
      dispatch(addPriorityTickets({ headers: priorityHeader, tickets: priorityTickets }));
      setIsLoading(false);
    }
    catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='spinner-container'>
        <Spinner/>
      </div>
    )
  }
  else{
  return (
    <>
      <Navbar/>
      <DashBoard/>
    </>
  )
  }
}

