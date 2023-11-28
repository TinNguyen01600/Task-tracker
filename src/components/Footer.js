import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2023</p>
            <Link to="/about">About</Link>
        </footer>
    )
}
export default Footer