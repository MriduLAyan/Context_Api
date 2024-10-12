import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../Contexts/Students';

const StudentsForm = () => {
  const {
    studentsName,
    setStudentsName,
    editMode,
    submitHandler
  } = useContext(StudentContext);

 
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={studentsName}
          onChange={(e) => {
            setStudentsName(e.target.value);
          }}
        />

        <button type="submit">
          {editMode ? 'Update student' : 'Add student'}
        </button>
      </form>
    </div>
  );
};

export default StudentsForm;
