

export default function CatDescription(props) {
  let avgWeight = (props.minWeight+props.maxWeight) / 2;
  return (
    <div>
    <div>{props.name} cats can live between {props.minLife} and {props.maxLife} years.</div>
    <div>{props.name}s are exceptionally playful and friendly to both children and pets. </div>
    <div>{props.origin} is the origin of {props.name}s. </div>
    <div>{props.name}s weigh {avgWeight} pounds on average.</div>
    </div>
  )
}