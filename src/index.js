import './style.css';

console.log('funguju!');

import { HomePage } from "./pages/HomePage"


const appElement = document.querySelector('#app')

const { pathname } = window.location;

if (pathname === '/') {
  appElement.append(HomePage());
}