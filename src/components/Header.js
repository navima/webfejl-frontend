import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd, showButton }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {showButton && <Button onClick={onAdd} color={showAdd ? 'var(--btn-bad)' : 'var(--btn-good)'} text={showAdd ? 'Cancel' : 'Add Student...'} />}
        </header>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
