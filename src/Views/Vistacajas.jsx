import React from 'react';
import './Csscajas.css';


const Vistacajas = (props) => {

    const {data} = props;
    

    return (
        <div>
            {data.map ((caja,i)=><div key={i} style={{backgroundColor: caja.color, width: `${caja.width}px`, height: `${caja.height}px` }} className='box'> </div>) }
        </div>
    );
}

export default Vistacajas;
