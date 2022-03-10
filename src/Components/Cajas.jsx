import React, { useState, useEffect} from 'react';



const Cajas = (props) => {

    const {cajas , setCajas} = props;
    const [color , setColor] = useState([])
    const [height , setHeight] = useState('')
    const [width , setWidth] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        setCajas([...cajas,color,height,width]);
    }
    useEffect(()=>{
        console.log(cajas)
    },[cajas]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='forms'>
                    <label htmlFor="box">Color: </label>
                    <input type="color" name='box' onChange={(e) => setColor(e.target.value)} /> <br />
                    <input type="number" name='box' onChange={(e) => setHeight(e.target.value)} /><br />
                    <input type="number" name='box' onChange={(e) => setWidth(e.target.value)} /><br />
                </div>    
                <div className='forms'>
                    <input className='btn' type="submit" value='Agregar color' />
                </div>
            </form>
        </div>
    );
}

export default Cajas;
