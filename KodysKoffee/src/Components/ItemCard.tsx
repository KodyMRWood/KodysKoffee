interface Props {
    name: string;
    price: number;
    description: string;
    image: string;
    clickFunc?: () => void;

}

function ItemCard({name, price, description, image, clickFunc}: Props) 
{
  const showDialogBtn = document.getElementById("showDialogBtn") as HTMLDivElement;
  const favDialog = document.getElementById(`favDialog`) as HTMLDialogElement;
  
  function handleMenuItemClick() {
    favDialog?.showModal();
    console.log("Clicked on " + name);
    clickFunc?.();
  }
  showDialogBtn?.addEventListener("click", () => handleMenuItemClick);

  return (
    <div className="card" id={"showDialogBtn"} onClick={handleMenuItemClick}>
        <img src={image} alt={name + description} className="cardImg"/>
        <h2 className="itemName">{name}</h2>
        <h3 className="itemPrice">$ {price.toFixed(2)}</h3>
        <p className="itemDesc">{description}</p>
    </div>
  )
}

export default ItemCard;