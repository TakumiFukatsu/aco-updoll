import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function ModalScreen(props) {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  const windowMaxHeight = window.innerHeight;
  const navigation = useNavigate();

  const pushMain = () => {
    setIsOpen(false);
    navigation('/');
  }

  const pushInfo = () => {
    setIsOpen(false);
    navigation('/info');
  }
  return (
    <div style={{height: windowMaxHeight, width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center'}}>
      <div style={{height: 360, width: '65%', marginTop: 60, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <div style={{height: 75, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
          <div onClick={pushMain} style={{fontSize: 19, fontFamily: 'Rockwell', color: 'white', marginTop: 3.5, textDecoration: 'none'}}>{'HOME'}</div>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
        </div>
        <div style={{height: 75, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
          <div onClick={pushInfo} style={{fontSize: 19, fontFamily: 'Rockwell', color: 'white', marginTop: 3.5, textDecoration: 'none'}}>{'ABOUT US'}</div>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
        </div>
        <div style={{height: 75, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
          <a href="mailto:info@acomic.co.jp" style={{fontSize: 19, fontFamily: 'Rockwell', color: 'white', marginTop: 3.5, textDecoration: 'none'}}>{'SUPPORT'}</a>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
        </div>
        <div style={{height: 75, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
          <a href="mailto:info@acomic.co.jp"  style={{fontSize: 19, fontFamily: 'Rockwell', color: 'white', marginTop: 3.5, textDecoration: 'none'}}>{'CONTACT US'}</a>
          <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="carbon:dot-mark" />
        </div>
      </div>
    </div>
  );
}

export default ModalScreen;
