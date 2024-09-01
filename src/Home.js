import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
    <div>
      <h1>Travel Journal</h1>
      <nav>
        <ul>
          <li><Link to="/add" style={{textDecoration:'none',color: "red"}}>Add New Entry</Link></li>
          <li><Link to="/entries" style={{textDecoration:'none',color: "red"}}>View Entries</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home