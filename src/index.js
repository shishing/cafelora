import './style.css';

console.log('funguju!');

import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery'; 
import { Header } from './components/Header';
import { Menu } from './components/Menu';



const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu({drinks:"loading"}), Gallery(), Contact());

pageElement.append(Header(), main,  Footer());

document.querySelector('#app').append(pageElement);