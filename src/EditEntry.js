import React from 'react';
import { useParams } from 'react-router-dom';
import FromEntry from './FromEntry';

function EditEntry({ entries, editEntry }) {
  const { id } = useParams();
  const entry = entries[id];

  const handleSave = (updatedEntry) => {
    editEntry(id, updatedEntry);
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <FromEntry initialData={entry} onSave={handleSave} />
    </div>
  );
}

export default EditEntry;
