import './App.css';
import React from 'react';
import ReactPlayer from 'react-player/dailymotion';
import styled from 'styled-components';

function App() {
  
  return (
<PlayerWrapper className='player-wrapper'>
<ReactPlayer 
className='react-player'
url='https://dai.ly/k1WghOiH2PNfp5yE2wD'
width='250px'
height='450px'
controls={true}
style={{borderRadius:20, overflow:'hidden'}}
/>
    </PlayerWrapper>
  );
}

export default App;

const PlayerWrapper = styled.div`
  position: relative;
  //padding-top: 50.25% 
  margin-left: 400px;
  margin-top:400px;
  border-radius: 10px;
  /* Player ratio: 100 / (1280 / 720) */
`;
