import './App.css'
import SideFilter from './SideFilter';

// Icons
import Logo from './assets/Icon.svg'
import LatteImg from './assets/latte.jpg'
import CappuccinoImg from './assets/cappuccino.jpg'
import IcedCoffeeImg from './assets/icedcoffee.jpg'
import IcedMatchaImg from './assets/icedMatcha.jpg'
import MatchaLatteImg from './assets/matchalatte.jpg'
import ColdBrewImg from './assets/coldbrew.jpg'

// Interface for object for each item that will be used to store the data
export interface Item{
    name: string;
    price: number;
    description: string;
    image: string;
    type: string;
    temp: string; // hot or iced
}


const menu: Item[] = [
{
    name: "Latte",
    price: 5,
    description: "A milky espresso based drink",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  {
    name: "Cappuccino",
    price: 5.50,
    description: "Espresso Drink with extra milk foam",
    image: CappuccinoImg,
    type: "coffee",
    temp: "hot"
  },
  {
    name: "Cold Brew",
    price: 4.75,
    description: "Steeped overnight, a delicious and strong iced coffee with cold foam",
    image: ColdBrewImg,
    type: "coffee",
    temp: "iced"
  },
    {
    name: "Matcha Latte",
    price: 5.50,
    description: "Ceremonial grade matcha with steamed milk",
    image: MatchaLatteImg,
    type: "matcha",
    temp: "hot"
  },
  {
    name: "Iced Latte",
    price: 5.00,
    description: "Like a latte but cold",
    image: IcedCoffeeImg,
    type: "coffee",
    temp: "iced"
  },
 {
    name: "Iced Matcha",
    price: 5.50,
    description: "Like a matcha latte but cold",
    image: IcedMatchaImg,
    type: "matcha",
    temp: "iced"
  }
]

function App() {

  return (
    <>
    <img src={Logo} alt="Kody's Koffee Logo" className="logo"/>
    <h1 className='header'>Kody's Koffee</h1>
        <SideFilter menu={menu}></SideFilter>
    <footer></footer>
    </>
  )
}

export default App
