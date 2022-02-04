import { useState } from 'react';
import Ganar from '../ganar/Ganar';
import ListaG from '../ganar/listaG/ListaG';
import Requisistos from '../requisitos/Requisistos';
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
            <div className="container_btns">
                <button onClick={handleClick1} className={`buttonB ${state1 ? 'isActive' : ''}`}>Personas</button>
                <button onClick={handleClick2} className={`buttonB ${state2 ? 'isActive' : ''}`}>Negocios</button>
            </div>
            <Ganar estado1={state1} />
            <ListaG estado1={state1} />
            <Requisistos estado1={state1} />
        </>
    );
};

export default ButtonB;
