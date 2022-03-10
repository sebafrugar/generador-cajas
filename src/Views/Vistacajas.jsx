import React from 'react';
import Cajas from '../Components/Cajas';
import './Csscajas.css';


const Vistacajas = (props) => {

    const {data} = props;

    return (
        <div>
            {data.map ((caja)=><div style={{backgroundColor: caja}} className='box'></div>) }
        </div>
    );
}

export default Vistacajas;
