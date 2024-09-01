import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddEntry from './AddEntry';
import EditEntry from './EditEntry';
import ViewEntity from './ViewEntity';
import NavBar from './NavBar';



function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const editEntry = (id, updatedEntry) => {
    const updatedEntries = entries.map((entry, index) => index === parseInt(id) ? updatedEntry : entry);
    setEntries(updatedEntries);
  };

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((_, index) => index !== id);
    setEntries(filteredEntries);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEntry addEntry={addEntry} />} />
          <Route path="/entries" element={<ViewEntity entries={entries} deleteEntry={deleteEntry} />} />
          <Route path="/edit/:id" element={<EditEntry entries={entries} editEntry={editEntry} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
