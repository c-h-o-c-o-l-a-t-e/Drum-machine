import React, { useState } from 'react';
import Drumpads from './Components/DrumPads';
import Display from './Components/Display';

function App() {
  let [text,setText]=useState('');
    function updateDisplay(txt){
        setText(text=txt)
  }
  return (
    <div id="drum-machine">
      <Display desc={text} />
      <Drumpads update={updateDisplay}/>
    </div>
  );
}

export default App;
