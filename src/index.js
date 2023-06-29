import './style.css';

console.log('funguju!');

import { HomePage } from "./pages/HomePage"
import { OrderPage } from './pages/OrderPage';


const appElement = document.querySelector('#app')

const { pathname } = window.location;

if (pathname === '/') {
  appElement.append(HomePage());
}

if (pathname === '/objednavka') {
  appElement.append(OrderPage());
}