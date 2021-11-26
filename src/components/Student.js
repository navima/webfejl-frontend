import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Student = ({ student, onDelete }) => {
    return (
        <div className='student'>
            <h3>{student.name} <FaTimes style={{ color: 'var(--btn-bad)', cursor: 'pointer' }} onClick={() => onDelete(student.id)} /></h3>
            <div className='horizontal-flex'>
                <p>{student.email}</p>
                <p>{student.id}</p>
            </div>
            <div className='horizontal-flex'>
                <p>{student.dob} {`(${student.age ?? new Date(new Date() - new Date(student.dob)).getUTCFullYear() - 1970})`}</p>
                <Link to={`/modifyStudent/${student.id}`} className='flex-end'>Edit...</Link>
            </div>
        </div>
    )
}

export default Student
