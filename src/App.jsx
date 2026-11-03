import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import StudentList from './components/StudentList';

function App() {

  const [name,setName] = useState("Brandon");
  const [students, setStudents] = useState(["Lisa","Selma","Oscar"])

  return (
    <>
      <h1>State & Props - WEBB26</h1>
      <div style={{width:"200px"}}>
        <Button namn={name} />
      </div>
      <StudentList students={students} namn={name}/>
    </>
  )
}

export default App
