


export default function Card(props){
    return(
        <div className="cards" key={props.key}>
              <div className="cards-item">
                   <img src={props.img} alt=""/>
                   <h1>{props.name}</h1>
                   <h3>{props.descr}</h3>
              </div>
              <span>
                 From ${props.price}
              </span>
        </div>
    )
}