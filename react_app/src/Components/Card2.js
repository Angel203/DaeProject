import "./Card.css";


function Card2(props){
    return(
        <div className="card">
            <img src={props.imageUrl}/>
            <h1>{props.Name}</h1>
            <p>{props.Work}5</p>
        </div>
    )
}

export default Card2;
