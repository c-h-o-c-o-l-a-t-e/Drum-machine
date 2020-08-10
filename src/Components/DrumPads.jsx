import React from 'react';
import SoundData from './AudioData';
import Pad from './Pad';

export default function Drumpads(props){
    
    return(
        <div className='dpads'>
        {SoundData.map(id=>{
            return(
                <Pad 
                    keyCode={id.keyCode}
                    keyTrigger={id.keyTrigger}
                    url={id.url}
                    desc={id.id}
                    updateDisplay={props.update}
                />                
            )
        })}
        
        </div>
    )
}

