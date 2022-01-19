import React from 'react';

function FeaturesScreen() {
  const windowMaxHeight = window.innerHeight;
  return (
    <div style={{height: windowMaxHeight, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#09182a', flexDirection: 'column'}}>
      <div style={{fontSize: 69, fontFamily: 'Futura', color: 'whitesmoke', marginTop: -50}}>{'Developement right now, '}</div>
      <div style={{fontSize: 69, fontFamily: 'Futura', color: 'whitesmoke', marginTop: 15}}>{'We Will be Coming Soon...'}</div>
    </div>
  );
}

export default FeaturesScreen;
