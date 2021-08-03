import { useState } from "react";
import ResultComponent from "./ResultComponent"
import "./style.scss"
import axios from "axios";
import { ContentResponse } from "core/types/ContentResponse"
import Loader from "./Loaders/Loader";


const Search = () => {
    const [name, setName] = useState('');
    const [request, setRequest] = useState<ContentResponse>();
    const [isLoading, setLoading] = useState(false)



    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const makeRequest = () => {
        setLoading(true)
        axios(`https://api.github.com/users/${name}`)
            .then(r => setRequest(r.data))
            .catch(er => setRequest(undefined))
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className="main-container">
            <div className="search-container">
                <h2 className="search-title">Encontre um perfil no GitHub</h2>
                <input type="text" placeholder="Usuário do GitHub" className="text-field" onChange={handleOnChange} value={name} />
                <button onClick={makeRequest}>Encontrar</button>
            </div>
            <div className="result-container">
                {isLoading ? <Loader /> : <ResultComponent content={request} />}
            </div>
        </div>
    );
}


export default Search