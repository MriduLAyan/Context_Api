import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../Contexts/Students';

const PresentStudents = () => {
  const { students, toggleList} = useContext(StudentContext);

  return (
    <div className="presentStudents">
      <h2>All Present Students</h2>

      {students
        .filter((student) => student.isPresent === true)
        .map((student) => (
          <li key={student.id}>
            <span> {student.name} </span>
            <button onClick={() => toggleList(student)}>
              Accidentally Added
            </button>
          </li>
        ))}
    </div>
  );
};

export default PresentStudents;
