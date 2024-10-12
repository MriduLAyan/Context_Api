import React from 'react'
import AllStudents from './AllStudents'
import PresentStudents from './PresentStudents'
import AbsentStudents from './AbsentStudents'


const StudentSection = () => {
  return (
    <div>
        <AllStudents/>
        <PresentStudents/>
        <AbsentStudents/>
    </div>
  )
}

export default StudentSection