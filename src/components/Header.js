import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
	const { title, onAdd, isFormOpen } = props;
    const location = useLocation()

	return (
		<header className="header">
			<h1>{title}</h1>
			{location.pathname === '/' && <Button 
                color={isFormOpen ? "red" : "green"} 
                text={isFormOpen ? "Close" : "Add"} 
                handleAddButton={onAdd} 
            />}
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