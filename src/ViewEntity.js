import React from 'react';
import { Link } from 'react-router-dom';
import './ViewEntity.css'

function ViewEntity({ entries, deleteEntry }) {
  return (
    <div>
      <center>
        <h2> Your Travel Entrys </h2>
        {entries.length === 0 ? (
          <p> No entries available. </p>
        ) : (
          <ul id="list">
            {entries.map((entry, index) => (
              <li key={index}><br></br>
                <h3> Title - : {entry.title}</h3>
                <p> Location -: {entry.location} </p>
                <p> Date -: {entry.date}</p>
                <p> Description -: {entry.description}</p>
                <button className='btn btn-primary'> <Link to={`/edit/${index}`}><span>Edit</span></Link></button>
                <button className='btn btn-primary' onClick={() => deleteEntry(index)}>Delete</button>
              </li>
            ))}
          </ul>

        )}
      </center>
    </div>
  );
}



export default ViewEntity;