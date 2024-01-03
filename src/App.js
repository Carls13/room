import { useState } from 'react';
import './App.css';
import { ROOM_DATA } from './data';

import logo from './images/logo.svg';
import iconLeft from './images/icon-angle-left.svg';
import iconRight from './images/icon-angle-right.svg';
import darkImage from './images/image-about-dark.jpg';
import lightImage from './images/image-about-light.jpg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const selectedRoomData = ROOM_DATA.find((room) => room.itemIndex === selectedRoom);

  const { title, description, className } = selectedRoomData;

  const handleNextClick = () => {
    if (selectedRoom === 3) {
      setSelectedRoom(1);
      return;
    }

    setSelectedRoom(selectedRoom + 1);
  }

  const handlePreviousClick = () => {
    if (selectedRoom === 1) {
      setSelectedRoom(3);
      return;
    }

    setSelectedRoom(selectedRoom - 1);
  }

  return (
   <div className='page-container'>
      <section className='main-grid'>
        <div className={`background-container ${className}`}>
          <header>
            <img onClick={() => setShowMenu(true)} src={hamburger} alt="Hamburger" className='burger-menu'/>
            <img src={logo} alt="Logo" />
            <div className={`header-options ${showMenu ? 'show-menu' : ''}`}>
              <img onClick={() => setShowMenu(false)} src={close} alt="Close" className='close-icon'/>
              <a href='https://carlosshb.com' target='_blank' rel="noreferrer">home</a>
              <a href='https://carlosshb.com' target='_blank' rel="noreferrer">shop</a>
              <a href='#about'>about</a>
              <a href='https://carlosshb.com' target='_blank' rel="noreferrer">contact</a>
            </div>
          </header>
        </div>
        <div className='room-info-container'>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href='https://carlosshb.com' target='_blank' rel="noreferrer">SHOP NOW &rarr;</a> 
          <div className='navigation-container'>
            <div onClick={handlePreviousClick} className='navigation-item'>
              <img width={25} src={iconLeft} alt="Left" />
            </div>
            <div onClick={handleNextClick} className='navigation-item'>
              <img width={25} src={iconRight} alt="Right" />
            </div>
          </div>
        </div>
      </section>
      <section className='secondary-grid' id='about'>
        <img src={darkImage} alt="Dark" />
        <div className='furniture-info-column'>
          <h4>ABOUT OUR FURNITURE</h4>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <img src={lightImage} alt="Light" />
      </section>
   </div>
  );
}

export default App;
