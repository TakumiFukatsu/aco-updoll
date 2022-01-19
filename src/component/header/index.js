import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../IMG_1014.png';
import title from '../../title.png';

import MediaQuery from "react-responsive";
import { Squeeze as Hamburger } from 'hamburger-react'

function Header(props) {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  const navigation = useNavigate();

  const pushMain = () => {
    setIsOpen(false);
    navigation('/');
  }

  const pushInfo = () => {
    setIsOpen(false);
    navigation('/info');
  }

  const pushFeatures = () => {
    setIsOpen(false);
    navigation('/features');
  }
  return (
    <div style={{justifyContent: 'space-between'}} className='headerWrap'>
      <div onClick={pushMain} className='titleWrap' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '2.5%'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={title} className="App-title" alt='title' />
      </div>

      <div style={{marginRight: '5%'}}>
      <MediaQuery query="(max-width: 767px)">
        <Hamburger 
            size={23} 
            color='white' 
            onToggle={toggled => {
              if (toggled) {
                setIsOpen(true)
              } else {
                setIsOpen(false)
              }
          }} />
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div style={{display: 'flex', justifyContent: 'space-between', width: 320, color: 'white', marginTop: 25, fontFamily: 'Rockwell'}}>
          <div onClick={pushFeatures}>{'Features'}</div>
          <div onClick={pushInfo} style={{textDecolation: 'none', color: 'white'}} >{'About us'}</div>
          <a href="mailto:info@acomic.co.jp" style={{textDecoration: 'none', color: 'white'}}>{'Support'}</a>
        </div>
      </MediaQuery>
      </div>
    </div>
  )
}

export default Header;
