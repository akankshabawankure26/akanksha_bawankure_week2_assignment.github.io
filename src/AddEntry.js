
import React from 'react';
import FromEntry from './FromEntry';
import './App.css'

function AddEntry({ addEntry }) {
  const handleSave = (entry) => {
    addEntry(entry);
  };

  return (
    <div>
      <h2 id="add">Add New Entry</h2>
      <FromEntry onSave={handleSave} />
    </div>
  );
}


export default AddEntry;