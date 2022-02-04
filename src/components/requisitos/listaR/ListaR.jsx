import { PEOPLE, BUSINESS } from '../../../data/data';
import './listaR.scss';

function ListaR({estado1}) {

    let arreglo;

    if(estado1) {
        arreglo=PEOPLE;
    } else {
        arreglo=BUSINESS;
    }

  return (
    <div className='lista' >
        {
            arreglo.map((item)=> {
                return (
                    <div className='lista_item'>
                        <span>{item.numero}</span>
                        <p>{item.texto}</p>
                    </div>
                )
            })
        }
    </div>
    );
};

export default ListaR;
