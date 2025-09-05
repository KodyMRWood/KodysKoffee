
interface Props {
    name: string;
    price: number;
    description: string;
    image: string;

}

function ItemCard({name, price, description, image}: Props
) {
  return (
    <div className="card" onClick={()=>{console.log({name})}}>
        <img src={image} alt={name + description} className="cardImg" width={100}/>
        <h2>{name}</h2>
        <h3>${price.toFixed(2)}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ItemCard