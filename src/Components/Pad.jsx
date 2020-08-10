import React from 'react';

export default function Pad(props){
    function handleKeyPress(e){
        const sound=document.getElementById(props.keyTrigger);
        if(e.keyCode===props.keyCode){
            sound.play();
            props.updateDisplay(props.desc)
        }
    }
    function handleClick(){      
        const sound=document.getElementById(props.keyTrigger);
        sound.play();
        props.updateDisplay(props.desc)
    }
    document.addEventListener('keydown',handleKeyPress);
    return(<div>
        <button className='drum-pad btn btn-light' id={props.desc} onClick={handleClick}>
            {props.keyTrigger}
            <audio src={props.url} className='clip' id={props.keyTrigger}></audio>
        </button>
        </div>
    )
}