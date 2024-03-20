import "../css/project-cards.css";


export default function ProjectCard(props) {
    return(
        <div className="card">
        <img className="card-img-top" src={props.data.thumbnail} alt={props.data.alt}/>
        <div className="card-body">
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text">{props.data.description}</p>
            <div className="btn-container">
                <a href= {props.data.url} className="btn btn-primary">Read</a>
            </div>
        </div>
        </div>        
    );
}