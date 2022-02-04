import { useEffect, useState } from 'react';
import './ganar.scss';

function Ganar() {

  // const url='https://run.mocky.io/v3/00a83b7d-9de9-4d4c-a02e-768b172bf431';  
  const url='http://myjson.dit.upm.es/api/bins/4v6p';



  const [datos, setDatos]=useState([]);


  const obtenerDatos=async ()=>{
    try {
      const respuesta=await fetch(url);
      const resultado=await respuesta.json();
      setDatos(resultado);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    obtenerDatos();
  },[]);

  console.log(datos)

  return (
        <div>

          {/* {
            datos.business
          } */}
     
  

        </div>
    );
}

export default Ganar;
