import "./style.css"
import  {Drink} from "./components/Drink/index.js"
import { OrderDetail } from "./components/OrderDetail"

export const Menu = (props) => {

    const { drinks } = props
    const element = document.createElement("section")
    element.classList.add("menu")
    element.setAttribute("id", "menu")


    element.innerHTML = `
    
    <div class="container">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list">
      </div>

     
    </div>
 
`

    if (drinks === "loading"){
      fetch("https://cafelora.kodim.app/api/me/drinks", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJzaGlzaGluZyIsInNjcCI6ImFwcCIsImlhdCI6MTY4NzQ1MDQyMX0.3oReSsO79o4DX-5KUniH9o5vgmn5fFHUywg2GPoAy9E',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        element.replaceWith(

          Menu ({
            drinks: data.result
          })
        )
      
      
      })


    } else { //na toto else davat pozor, ked mi chyba, hadze chybu
      const drinkListELm = element.querySelector(".drinks-list")
      drinkListELm.append(...drinks.map((drink) => Drink(drink)))


    }
      
  



   element.append(OrderDetail())


    
return element

}