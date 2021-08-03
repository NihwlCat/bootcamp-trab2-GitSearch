import "./style.scss"
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
            <div className="desc-container">
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
                <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span style={{color: '#1890FF'}}>antforfigma@gmail.com</span></p>
            </div>
            <Link to="search"><button>Começar</button></Link>
        </div>
    );
}

export default Home