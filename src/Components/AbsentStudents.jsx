import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../Contexts/Students';

const AbsentStudents = () => {
  const { students, toggleList } = useContext(StudentContext);

  return (
    <div className="absentStudents">
      <h2>All Absent Students</h2>

      {students
        .filter((student) => student.isPresent === false)
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

export default AbsentStudents;
