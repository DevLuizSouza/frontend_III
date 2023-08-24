import './style.scss';

export function Card(props) {
  console.log(props);
  
  return (
    <div style={{ backgroundColor: props.color.hex }} className="cardComponent">
      <p>{props.color.name}</p>
      <span>{props.color.hex}</span>
    </div>
  )
}
