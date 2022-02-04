import { useState } from 'react';
import './buttonB.scss';

function ButtonB() {

    const [state1, setState1]=useState(true);
    const [state2, setState2]=useState(false);

    const handleClick1=()=>{
        if(state1) {
            return
        } else {
            setState1(true)
            setState2(false)
        };
    };

    const handleClick2=()=>{        
        if(state2) {
            return
        } else {
            setState1(false);
            setState2(true)
        };
    };

    return (
        <>
            <button onClick={handleClick1} className={`buttonB ${state1 ? 'isActive' : ''}`}>Personas</button>
            <button onClick={handleClick2} className={`buttonB ${state2 ? 'isActive' : ''}`}>Negocios</button>
        </>
    );
};

export default ButtonB;
