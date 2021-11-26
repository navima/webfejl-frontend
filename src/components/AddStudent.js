import { useState } from 'react'

function AddStudent({ onAdd }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please enter a name')
            return
        }
        if(!email) {
            alert('Please enter an email')
            return
        }
        if(!dob) {
            alert('Please enter a date of birth')
            return
        }

        onAdd({name: name, email: email, dob: dob})

        setName('');
        setEmail('');
        setDob('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
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
            <input type='submit' value='Save Student' className='btn btn-block'  />
        </form>
    )
}

export default AddStudent
