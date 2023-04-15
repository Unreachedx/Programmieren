import React from 'react'
import "./Header.css"
import { userData } from './../../utils/users';


function Header({userData,setUsers}) {

  //create state for country
  const [country, setCountry] = React.useState('')

  const handleInput = (e) =>{
    console.log(e.target.value)
    //store user input in state
    setCountry(e.target.value)
  }

  const handleShow = () =>{
    console.log('show all')
    //users is all of userData
    setUsers(userData)
  }

  const handleSearch = () =>{
    console.log(country)
    //filter userData to get only the matches

    //store that in users

    setUsers(userData.filter(item => item.country.toLowerCase() 
    === country.toLowerCase()))

    //clear the textbox
    setCountry("")
  }

  return (
    <div className="header-container">
    <button onClick={handleShow}>Show all</button>
    <div className="search-container"></div>
    <input type="text" onChange={handleInput} 
    placeholder='Enter Country' value={country}/>
    <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Header