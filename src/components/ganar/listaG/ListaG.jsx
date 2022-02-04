import { PERSONAS, NEGOCIOS } from "../../../data/data";
import './listaG.scss';

function ListaG({estado1}) {

    let arreglo;

    if(estado1) {
        arreglo=PERSONAS;
    } else {
        arreglo=NEGOCIOS;
    };

  return (
    <div className="listaG">
        {
            arreglo.map((item)=> {
                return (
                    <div className="listaG_item" key={item.id} >
                        <div className="listaG_item-uno">
                            <span className={`${estado1 ? 'verde' : 'rosa'}`} >{item.numero}</span>
                            <p>{item.texto}</p>
                        </div>
                        <p className={`listaG_item-dos ${estado1 ? 'fverde' : 'frosa'} `}>{item.ganas}</p>
                    </div>
                )
            })
        }
    </div>
    );
};

export default ListaG;
