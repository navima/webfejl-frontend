import Student from "./Student"

const Students = ({ students, onDelete }) => {

    return (
        <>
            {students.map((elem) => (<Student key={elem.id} student={elem} onDelete={onDelete} />))}
        </>
    )
}

export default Students

