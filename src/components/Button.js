import PropTypes from "prop-types";

const Button = (props) => {
	const { text, color, handleAddButton } = props;

	return (
		<button
			className="btn"
			style={{ backgroundColor: color }}
			onClick={handleAddButton}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
