import { createContext, useState } from 'react';

export const StudentContext = createContext();

const StudentProvider = (props) => {
  const [studentsName, setStudentsName] = useState('');
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudents, setEditableStudents] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (studentsName.trim() === '')
      return alert('Please provite your academic name');

    editMode === false ? createHandler() : updateHandler();
  };

  const createHandler = () => {
    const newStudents = {
      id: Date.now() + '',
      name: studentsName,
      isPresent: undefined,
    };

    setStudents([...students, newStudents]);
    setStudentsName('');
  };

  const updateHandler = () => {
    const updatableStudents = students.map((student) => {
      if (student.id === editableStudents.id) {
        return {
          ...student,
          name: studentsName,
        };
      }
      return student;
    });

    setStudents(updatableStudents);
    setEditMode(false);
    setStudentsName('');
    setEditableStudents(null);
  };

  const toggleList = (student) => {
    const updateStudent = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: !item.isPresent,
        };
      }
      return item;
    });

    setStudents(updateStudent);
  };

  const editHandler = (student) => {
    setEditMode(true);
    setStudentsName(student.name);
    setEditableStudents(student);
  };

  const removeHandler = (studentId) => {
    const removeStudent = students.filter(
      (student) => student.id !== studentId
    );

    setStudents(removeStudent);
  };

  const sendToPresentList = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `The Student is already in the ${
          student.isPresent === true ? 'Present List' : 'Absent List'
        }`
      );
    }

    const updateStudent = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: true,
        };
      }
      return item;
    });
    setStudents(updateStudent);
  };

  const sendToAbsentList = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `The Student is already in the ${
          student.isPresent === true ? 'Present List' : 'Absent List'
        }`
      );
    }

    const updateStudent = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: false,
        };
      }
      return item;
    });

    setStudents(updateStudent);
  };

  const ctxValue = {
    students,
    setStudents,
    studentsName,
    setStudentsName,
    editMode,
    setEditMode,
    editableStudents,
    setEditableStudents,
    submitHandler,
    toggleList,
    editHandler,
    removeHandler,
    sendToPresentList,
    sendToAbsentList,
  };

  return (
    <StudentContext.Provider value={ctxValue}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
