
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
        <img src={image} alt={name + description} className="cardImg"/>
        <h2 className="itemName">{name}</h2>
        <h3 className="itemPrice">$ {price.toFixed(2)}</h3>
        <p className="itemDesc">{description}</p>
    </div>
  )
}

export default ItemCard;