import React from 'react'
import "./HomePage.css"
import PersonCard from '../../components/PersonCard/PersonCard'

function HomePage({users}) {
  return (
    <div className='homepage-container'>
      <h1>User Directory</h1>
      <div className='person-container'>
      {
        users.map((item, index)=><PersonCard key={index} person={item} />)
      }

      </div>
    </div>

  )
}

export default HomePage