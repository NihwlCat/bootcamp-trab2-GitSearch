import { ContentResponse } from "core/types/ContentResponse";
import 'dayjs'
import dayjs from "dayjs";

type Props = {
    content: ContentResponse | undefined;
}

const ResultComponent = ({content}:Props) => {
    if(content === undefined){
        return null
    } else {
        return <> 
        <div>
            <img src={content?.avatar_url} alt="" className="image-container" />
            <a href={content?.html_url} target="_blank" rel="noreferrer"><button>Ver Perfil</button></a>
        </div>
        <div className="content-container">
            <div className="superior-container">
                <div className="bd-gray" style={{ fontSize: 12 }}>Repositórios públicos: {content?.public_repos}</div>
                <div className="bd-gray" style={{ marginLeft: 8, fontSize: 12 }}>Seguidores: {content?.followers}</div>
                <div className="bd-gray" style={{ marginLeft: 8, fontSize: 12 }}>Seguindo: {content?.following}</div>
            </div>
            <div className="info-container bd-gray">
                <h4 style={{ color: '#1890FF', marginBottom: '19px', fontWeight: 500, fontSize: 20 }}>Informações</h4>
                <div className="info-labels bd-gray"><strong>Empresa: </strong> <span> &nbsp; {content?.company}</span> </div>
                <div className="info-labels bd-gray"><strong>Website: </strong> <span> &nbsp; {content?.blog}</span> </div>
                <div className="info-labels bd-gray"><strong>Localidade: </strong> <span> &nbsp; {content?.location}</span> </div>
                <div className="info-labels bd-gray"><strong>Membro desde: </strong>  <span> &nbsp; {dayjs(content.created_at).format("DD/MM/YYYY")}</span> </div>
            </div>
        </div>
    </>
    }
}
export default ResultComponent;