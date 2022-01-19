import React, {useState} from 'react';
import { Icon } from '@iconify/react';

import AcomicLogo from '../../assets/acomiclogo.png';

function AboutScreen() {
  const maxWindow = window.innerHeight + 100;
  const [language, setLanguage] = useState('en');
  
  const onChangeLang = () => {
    switch (language) {
      case 'en':
        setLanguage('ja');
        break;
      case 'ja':
        setLanguage('en');
        break;
      default:;
    }
  };
  return (
    <div style={{height: maxWindow, width: '100%', backgroundColor: '#09182a'}}>
      <div style={{height: 'auto', width: '95%', marginLeft: '2.5%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
        <div onClick={onChangeLang} style={{position: 'absolute', display: 'flex', height: 'auto', width: 'auto', fontFamily: 'Rockwell', right: '5%', marginTop: '2.5%'}}>
          <Icon style={{height: 16, width: 16, color: 'darkgrey'}} icon="heroicons-outline:switch-horizontal" />
          <div style={{color: 'darkgrey', marginLeft: 5, fontSize: 18, marginTop: -2}}>{language}</div>
        </div>
        <div style={{marginTop: 30, fontSize: 24, fontFamily: 'Rockwell', color: 'white', marginRight: 'auto', fontWeight: 'bold'}}>{'About us'}</div>
        <div style={{height: 'auto', color: 'whitesmoke', marginTop: 15, fontFamily: 'Futura', fontSize: 18, marginRight: 'auto', marginLeft: '1.5%', fontWeight: 'bold'}}>
          {
            language === 'en' && (
              <>{'We Call The value in whitch on the their avant-garde hairstyles, and Opening up new avenues in the Fashion industory market and Arts'}</>
            )
          }
          {
            language === 'ja' && (
              <>{'未来を彩る前衛的なヘアスタイルを提唱し、ファッション業界やアート産業の新たな道を切り拓く'}</>
            )
          }
        </div>
        <div style={{marginTop: 35, fontSize: 20, fontFamily: 'Rockwell', color: 'white', marginRight: 'auto'}}>{'Our mission'}</div>
        <div style={{height: 'auto', color: 'whitesmoke', marginTop: 15, fontFamily: 'Futura', fontSize: 18, marginRight: 'auto', marginLeft: '1.5%'}}>
          {
            language === 'en' && (
              <>{'Online game, Camera Work, Metaverse we using to technology somewhere, so we choose styling a themselves more fashionaly and take conversible for in Discovery futures world.'}</>
            )
          }
          {
            language === 'ja' && (
              <>{'オンラインゲーム、カメラワーク、メタバースなど私達の生活は多くのテクノロジーによって変化してきました。私達ミッションとは将来において、その力を最大限に引き出す為により人々の個性を見出せるようなサービスを開発いていくことです'}</>
            )
          }
        </div>
        <div style={{marginTop: 35, fontSize: 20, fontFamily: 'Rockwell', color: 'white', marginRight: 'auto'}}>{'Company'}</div>
        <div style={{height: 'auto', width: '95%', color: 'whitesmoke', marginTop: 15, fontFamily: 'Futura', fontSize: 18, marginRight: 'auto', marginLeft: '1.5%', display: 'flex'}}>
          {
            language === 'en' && (
              <div style={{display: 'flex', width: 250, flexDirection: 'column', justifyContent: 'left', alignItems: 'flex-start', fontSize: 16}}>
                <div>{'acomic.inc'}</div>
                <div>{'1 Chome-9-1 Shinjuku'}</div>
                <div>{'Dai2 Take Buildimg - 4th Foor'}</div>
                <div>{'Tokyo, Shinjuku City'}</div>
                <div>{'Japan'}</div>
              </div>
            )
          }
          {
            language === 'ja' && (
              <div style={{display: 'flex', width: 200, flexDirection: 'column', justifyContent: 'left', alignItems: 'flex-start', fontSize: 16}}>
                <div>{'株式会社アコミック'}</div>
                <div>{'新宿一丁目9番1号'}</div>
                <div>{'第2タケビル 4階'}</div>
                <div>{'東京都新宿区'}</div>
                <div>{'日本'}</div>
              </div>
            )
          }
          <img style={{height: 125, borderRadius: 15, marginLeft: 'auto'}} src={AcomicLogo} alt='' />
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
