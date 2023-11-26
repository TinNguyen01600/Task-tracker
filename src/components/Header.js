import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
	const { title, onAdd, isFormOpen } = props;

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button 
                color={isFormOpen ? "red" : "green"} 
                text={isFormOpen ? "Close" : "Add"} 
                handleAddButton={onAdd} 
            />
		</header>
	);
};

// If there's no props passed in, this is the default props
Header.defaultProps = {
	title: "Task Tracker",
};

// Prop types
Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;