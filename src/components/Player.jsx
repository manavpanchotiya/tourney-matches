function Player(props){
  return(
    <article className="Player">
        <h1>{props.firstName} <span>{props.gamerTag}</span> {props.lastName}
        </h1>
        {props.wins === 0 && <h2 className="zero">Currently with no wins :p </h2>}
        
        {props.wins === 1 && <h2>Currently at 1 win</h2>}
        
        {props.wins > 1 && <h2>Currently at {props.wins} wins</h2>}
    </article>
  )
}
export default Player