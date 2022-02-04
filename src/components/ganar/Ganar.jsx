import './ganar.scss';

function Ganar({estado1}) {

  return (
        <div className='ganar'>
          <p className='ganar_title'>¡Puedes ganar hasta 
          {
            estado1 ? (<span className={`${estado1 ? 'fverde' : 'frosa'}`}> $75 </span>) : (<span className={`${estado1 ? 'fverde' : 'frosa'}`}> $100 </span>)
          }
          semanales!</p>
          <p className='ganar_subtitle'>Es muy fácil, baz:</p>
        </div>
    );
};

export default Ganar;
