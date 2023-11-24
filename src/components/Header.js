import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
	const { title } = props;

	const handleAddButton = () => {
		console.log("Click");
	};

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button 
                color={"black"} 
                text={"Add"} 
                handleAddButton={handleAddButton} 
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