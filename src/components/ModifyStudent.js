import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link, useParams } from 'react-router-dom'

const ModifyStudent = ({ students, onModify }) => {
    const navigate = useNavigate()
    const params = useParams()
    const studentId = Number(params.studentId)
    const student = students.find(other => other.id === studentId)

    const [name, setName] = useState(student?.name)
    const [email, setEmail] = useState(student?.email)
    const [dob, setDob] = useState(student?.dob)

    const onSubmit = (e) => {
        e.preventDefault()

        onModify({ id: studentId, name: name, email: email, dob: dob })

        navigate("/")
    }

    return (
        <>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Student</label>
                    <input type='text' placeholder='Add Name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='email' placeholder='Add Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Date of birth</label>
                    <input type='date' placeholder='Add Date of Birth' value={dob} onChange={e => setDob(e.target.value)} />
                </div>
                <input type='submit' value='Save Student' className='btn btn-block' />
            </form>
            <Link to="/">Go Back</Link>
        </>
    )

}

export default ModifyStudent
