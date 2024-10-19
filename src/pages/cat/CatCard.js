export default function CatCard(props) {
  return (
    <div>
      <h1>{ props.name }</h1>
      <div>
        <img src={props.image}></img>
      </div>
    </div>
  )
}