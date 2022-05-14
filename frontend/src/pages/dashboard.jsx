import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import PortfolioForm from './PortfolioForm'

function Dashboard() {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>

      <PortfolioForm/>
    </>
  )
}

export default Dashboard