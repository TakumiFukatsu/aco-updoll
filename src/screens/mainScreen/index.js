import React from 'react';
import MediaQuery from "react-responsive";
import { Icon } from '@iconify/react';

import VidalHair from '../../assets/reginasample.png';
import UISample from '../../assets/uisample.png';
import TagOne from '../../assets/tagone.png';
import TagTwo from '../../assets/tagtwo.png';
import LaptopSample from '../../assets/laptopsample.png';

function MainScreen() {
  const windowMaxHeight = window.innerHeight;
  return (
    <div style={{height: 'auto', width: '100%', backgroundColor: '#09182a'}}>
      <MediaQuery query="(max-width: 947px)">
        <div style={{height: 470, width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            {/*<div style={{height: 400, width: 220, backgroundColor: 'grey', borderRadius: 18, position: 'absolute', zIndex: 11, marginLeft: -110, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{height: 390, width: 210, backgroundColor: 'black', borderRadius: 18, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img style={{height: 155, marginTop: 47.5}} src={VidalHair} alt="sample" />
                <div style={{height: 150, width: 160, marginTop: -5, display: 'flex'}}>
                  <div style={{height: 32, width: 32, borderRadius: 16, backgroundColor: 'blue', position: 'absolute', bottom: 165, left: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon style={{height: 20, width: 20, color: 'darkgrey', marginTop: -1, marginLeft: -1}} icon="fa-brands:slack-hash" />
                  </div>
                  <div style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'darkgreen', position: 'absolute', bottom: 137, right: 55, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon style={{height: 23, width: 23, color: 'darkgrey'}} icon="ep:user" />
                  </div>
                  <div style={{height: 45, width: 45, borderRadius: 22.5, backgroundColor: 'pink', position: 'absolute', bottom: 85, left: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon style={{height: 30, width: 30, color: 'grey', marginLeft: -2, marginTop: -2}} icon="ant-design:camera-filled" />
                  </div>
                  <div style={{height: 41, width: 41, borderRadius: 20.5, backgroundColor: 'orange', position: 'absolute', bottom: 57, right: 35, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon style={{height: 35, width: 35, color: 'whitesmoke'}} icon="bx:bx-sync" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{height: 400, width: 220, backgroundColor: 'grey', borderRadius: 18, position: 'absolute', zIndex: 10, marginLeft: 110, marginTop: 120, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{height: 390, width: 210, backgroundColor: 'black', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={UISample} alt="sample" style={{height: 350, marginTop: 20}} />
            </div>
          </div>*/}
          <img style={{height: 380, marginTop: 45}} alt='' src={LaptopSample} />
        </div>
        <div style={{height: 'auto', width: '80%', marginLeft: '10%', display: 'flex', flexDirection: 'column', marginTop: 25}}>
          <img src={TagOne} alt='tag' style={{}} />
          <img src={TagTwo} alt='tag' style={{marginTop: 5}} />
          <div style={{width: '100%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09182a'}}>
            <div style={{height: 93.75, width: 285, backgroundColor: 'white', marginTop: 35, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Icon icon="mdi:beta" style={{height: 62.5, width: 62.5, color: '37373C', marginLeft: 0}}/>
              <div style={{height: '90%', width: '75%', display: 'flex', flexDirection: 'column'}}>
                <div style={{marginLeft: '-25%', marginTop: '5.5%', color: '37373C', fontSize: 17.5}}>{'GET IT ON'}</div>
                <div style={{fontSize: 27.5, fontWeight: 'bold', color: '37373C', marginTop: '2.5%', marginLeft: '-13%'}}>{'Coming Soon...'}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', height: 20, backgroundColor: '#09182a'}} />
      </MediaQuery>
      <MediaQuery query="(min-width: 948px)">
        <MediaQuery query="(max-width: 1148px)">
          <div style={{height: 720, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '75%', matginLeft: '5%', display: 'flex', justifyContent: 'left'}}>
              <div style={{height: 250, width: '37.5%', marginTop: 150, display: 'flex', flexDirection: 'column', position: 'absolute', top: '15%', left: '7.5%'}}>
                <img src={TagOne} style={{}} alt='tag' />
                <img src={TagTwo} style={{}} alt='tag' />
                <div style={{position: 'absolute', height: 75, width: 228, backgroundColor: 'white', borderRadius: 7.5, left: '35%', marginTop: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Icon icon="mdi:beta" style={{height: 50, width: 50, color: '37373C', marginLeft: 0}}/>
                  <div style={{height: '90%', width: '75%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{marginLeft: '-25%', marginTop: '5.5%', color: '37373C', fontSize: 14}}>{'GET IT ON'}</div>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: '37373C', marginTop: '2.5%', marginLeft: '-13%'}}>{'Coming Soon...'}</div>
                  </div>
                </div>
              </div>
              <img style={{height: 550, marginLeft: 'auto', marginTop: 75}} src={LaptopSample} alt='sample' />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 1149px)">
          <div style={{height: 720, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '75%', matginLeft: '5%', display: 'flex', justifyContent: 'left'}}>
              <div style={{height: 250, width: '37.5%', marginTop: 150, display: 'flex', flexDirection: 'column', position: 'absolute', top: '15%', left: '7.5%'}}>
                <img src={TagOne} style={{}} alt='tag' />
                <img src={TagTwo} style={{}} alt='tag' />
                <div style={{position: 'absolute', height: 75, width: 228, backgroundColor: 'white', borderRadius: 7.5, left: '64%', marginTop: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Icon icon="mdi:beta" style={{height: 50, width: 50, color: '37373C', marginLeft: 0}}/>
                  <div style={{height: '90%', width: '75%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{marginLeft: '-25%', marginTop: '5.5%', color: '37373C', fontSize: 14}}>{'GET IT ON'}</div>
                    <div style={{fontSize: 22, fontWeight: 'bold', color: '37373C', marginTop: '2.5%', marginLeft: '-13%'}}>{'Coming Soon...'}</div>
                  </div>
                </div>
              </div>
              <img style={{height: 550, marginLeft: 'auto', marginTop: 75,}} src={LaptopSample} alt='sample' />
            </div>
          </div>
        </MediaQuery>
      </MediaQuery>
    </div>
  );
}

export default MainScreen;
