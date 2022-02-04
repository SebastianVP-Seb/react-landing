import ListaR from './listaR/ListaR';
import './requisitos.scss';

function Requisistos({estado1}) {
    return (
        <div className={`requisitos ${estado1 ? 'verde' : 'rosa'}`}>
            <h3 className='requisitos_title'>Requisitos</h3>
            <ListaR estado1={estado1} />
        </div>
    );
};

export default Requisistos;
