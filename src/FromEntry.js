import React, { useState, useEffect } from 'react';
import './FormEntry.css';
import ViewEntity from './ViewEntity';
import { useNavigate } from 'react-router-dom';


function FromEntry({ onSave, initialData = { title: '', location: '', date: '', description: '' } }) {
  const [entry, setEntry] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(entry);
    alert("Travel Log Recorded")
    navigate('/entries');

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Title  </label>
        <input name="title" value={entry.title} onChange={handleChange} />
      </div>
      <div>
        <label> Location  </label>
        <input name="location" value={entry.location} onChange={handleChange} />
      </div>
      <div>
        <label> Date  </label>
        <input name="date" value={entry.date} onChange={handleChange} type="date" />
      </div>
      <div>
        <label id="des"> Description  </label>
        <textarea name="description" value={entry.description} onChange={handleChange} />
      </div>
      <button type="submit" className='btn btn-success'>Save Entry</button>
    </form>
  );
}


export default FromEntry;