import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../Contexts/Students';

const AllStudents = () => {
  const {
    students,
    editHandler,
    removeHandler,
    sendToPresentList,
    sendToAbsentList,
  } = useContext(StudentContext);

  return (
    <div className="allStudents">
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span> {student.name} </span>

            <button
              onClick={() => {
                editHandler(student);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                removeHandler(student.id);
              }}
            >
              Delete
            </button>

            <button onClick={() => sendToPresentList(student)}>
              Add to Present
            </button>

            <button onClick={() => sendToAbsentList(student)}>
              Add to Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
