import PropTypes from 'prop-types'

const Header = (props) => {
    const { title } = props
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}


// If there's no props passed in, this is the default props
Header.defaultProps = { 
    title: 'Task Tracker'
}

// Prop types
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header