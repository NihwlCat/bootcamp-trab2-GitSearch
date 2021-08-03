import './style.scss'
import { Link } from 'react-router-dom'

const Bar = () => (
    <nav className="bar">
        <Link to="/"><h1 className="title">Bootcamp DevSuperior</h1></Link>
    </nav>
);

export default Bar;