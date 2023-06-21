import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {

    const {id, name, ordered, image, layers, } = props

    const element = document.createElement("div")
    element.classList.add("drink")

    element.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src=${image}>
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
        
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">
        Objednat
      </button>
    </div>
    `

    const drinkInfoELm = element.querySelector(".drink-info")
    drinkInfoELm.append(Layer({color: "#613916", label: "espresso"}))

  return element

//   <div class="drink">
//     <div class="drink__product">
//       <div class="drink__cup">
//         <img src="https://cafelora.kodim.app/assets/cups/doppio.png">
//       </div>
//       <div class="drink__info">
//         <h3>Doppio</h3>
//         <div class="layer">
//           <div class="layer__color" style="background-color: #613916"></div>
//           <div class="layer__label">espresso</div>
//         </div>
//       </div>
//     </div>
//     <div class="drink__controls">
//       <button class="order-btn">
//         Objednat
//       </button>
//     </div>
//   </div>

//   <div class="drink">
//     <div class="drink__product">
//       <div class="drink__cup">
//         <img src="https://cafelora.kodim.app/assets/cups/lungo.png">
//       </div>
//       <div class="drink__info">
//         <h3>Lungo</h3>
//         <div class="layer">
//           <div class="layer__color" style="background-color: #b0dee1"></div>
//           <div class="layer__label">voda</div>
//         </div>
//         <div class="layer">
//           <div class="layer__color" style="background-color: #613916"></div>
//           <div class="layer__label">espresso</div>
//         </div>
//       </div>
//     </div>
//     <div class="drink__controls">
//       <button class="order-btn">
//         Objednat
//       </button>
//     </div>
//   </div>
// </div> 
}