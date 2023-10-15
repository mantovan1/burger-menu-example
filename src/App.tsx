import * as style from './style.ts';
import { useState } from 'react';

function App() {

  const [menuClass, setMenuClass] = useState('menu');
  const [menuClicked, setMenuClicked] = useState(false);

  function updateMenu() {
    if(!menuClicked) {
      setMenuClass('menu visible');
      disableScroll();
    } else {
      setMenuClass('menu');
      enableScroll();
    }

    setMenuClicked(!menuClicked);
  }

  function disableScroll() {
    // Salva a posição atual da rolagem
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
  
    // Desabilita a rolagem ao definir o overflow do body para hidden
    document.body.style.overflow = 'hidden';
  
    // Mantém a posição da rolagem
    window.scrollTo(scrollX, scrollY);
  }

  function enableScroll() {
    // Restaura o overflow do body para o valor padrão
    document.body.style.overflow = 'auto';
  }

  return (
    <style.styledApp>
      <nav className='navbar'>
        <div className='navbar_content'>
          <img onClick={
            updateMenu
          } src='menu.png' className='openmenu'>
          </img>
          <h1 className='title'>Burger Menu</h1>
        </div>
      </nav>
      <div className={menuClass}>
        <div className='submenu'>
          <a className='item'>Faça um pedido</a>
          <a className='item'>Baixe nosso aplicativo</a>
          <a className='item'>Fale conosco</a>
          <a className='item'>Faça parte da nossa equipe</a>
        </div>
      </div>

      <div className='content'>
        <div className='item'>
          <img className='img' src='hamburger.webp'></img>
          <a className='name'> Lorem Ipsum </a>
          <a className='price'> R$XX,XX </a>
        </div>
        
        <div className='item'>
          <img className='img' src='hamburger.webp'></img>
          <a className='name'> Lorem Ipsum </a>
          <a className='price'> R$XX,XX </a>
        </div>

        <div className='item'>
          <img className='img' src='hamburger.webp'></img>
          <a className='name'> Lorem Ipsum </a>
          <a className='price'> R$XX,XX </a>
        </div>

        <div className='item'>
          <img className='img' src='hamburger.webp'></img>
          <a className='name'> Lorem Ipsum </a>
          <a className='price'> R$XX,XX </a>
        </div>

        <div className='item'>
          <img className='img' src='hamburger.webp'></img>
          <a className='name'> Lorem Ipsum </a>
          <a className='price'> R$XX,XX </a>
        </div>
      </div>1
    </style.styledApp>
  )
}

export default App
