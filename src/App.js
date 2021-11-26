import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from "./components/AddStudent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModifyStudent from "./components/ModifyStudent";
import Students from "./components/Students";

function App() {
	const [showAddStudent, setShowAddStudent] = useState(false)
	const [students, setStudents] = useState([])

	useEffect(() => {
		const getStudents = async () => {
			const studentsFromServer = await fetchStudents()
			setStudents(studentsFromServer)
		}

		getStudents()
	}, [])

	const fetchStudents = async () => {
		const res = await fetch('/api/v1/student')
		const data = await res.json()

		return data
	}

	const fetchStudent = async (id) => {
		const res = await fetch(`/api/v1/student/${id}`)
		const data = await res.json()

		return data
	}

	const addStudent = async (student) => {
		const res = await fetch('/api/v1/student', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
		const data = await res.json()
		const id = data

		const newStudent = { id, ...student }
		setStudents([...students, newStudent])
	}

	const deleteStudent = async (id) => {
		await fetch(`/api/v1/student/${id}`, { method: 'DELETE' })

		setStudents(students.filter((student) => student.id !== id))
	}

	const modifyStudent = async (student) => {
		const res = await fetch(`/api/v1/student`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
		const data = await res.json()

		const modIndex = students.findIndex(other => other.id === student.id)
		const modStudents = Object.assign([...students], {
			[modIndex]: data
		})

		setStudents(modStudents)
	}

	return (
		<Router>
			<div className="container">
				<Routes>
					<Route path='/' element={
						<>
							<Header title='Student List' onAdd={() => setShowAddStudent(!showAddStudent)} showAdd={showAddStudent} showButton={true}/>
							{showAddStudent && <AddStudent onAdd={addStudent} />}
							{students.length ? <Students onDelete={deleteStudent} students={students} /> : "There are no Students"}
						</>} />
					<Route path='/modifyStudent/:studentId' element={
						<>
							<Header title='Modify Student' showButton={false} />
							<ModifyStudent onModify={modifyStudent} students={students}/>
						</>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
