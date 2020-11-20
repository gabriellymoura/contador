import styles from '../css/styles.module.css'
import {useState} from 'react';

function Home(){
    return(
        <div className = {styles.center}>
           <Contador/> 
        </div>
        
    ) 
}

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador+1);
    }

    return (
        <div>
            <div className = {styles.contador}>{contador}</div>
            <button className = {styles.button} onClick = {addContador}>Adicionar</button>
        </div>
    )
}

export default Home;