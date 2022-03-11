import React, { useState, useEffect} from 'react';



const Cajas = (props) => {
    const {cajas, setCajas} = props;
    const [caja , setCaja] = useState({
        color: '',
        height: 0,
        width: 0,
    })

    const onSubmit = (e) =>{
        e.preventDefault();
        setCajas([...cajas,caja])
    }
    useEffect(()=>{

    },[caja]);
    
    const handlerForm = (target) =>{
        setCaja({...caja,[target.name]: target.value});
        
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='forms'>
                    <label htmlFor="box">Color: </label>
                    <input type="color" name='color' onChange={(e) => handlerForm(e.target)} /> <br />
                    <label>Height : </label>
                    <input type="number" name='height' onChange={(e) => handlerForm(e.target)} /><br />
                    <label>Width : </label>
                    <input type="number" name='width' onChange={(e) => handlerForm(e.target)} /><br />
                </div>    
                <div className='forms'>
                    <input className='btn' type="submit" value='Agregar color' />
                </div>
            </form>
        </div>
    );
}

export default Cajas;
