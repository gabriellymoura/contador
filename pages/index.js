import styles from '../css/styles.module.css'
import {useState} from 'react';

function Home(){
    return(
        <div className = {styles.center}>
            <div>
                <Contador/> 
            </div>
            <div>
                <Input/>
            </div>
           
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


class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            nome: ""
        };

        this.onChange = (evento) =>{
            this.setState({nome: evento.target.value});
        };
    }

    render(){
        return(
            <div>
               <div className = 'text'>
                    Seu texto:
                    <br/>
                </div>
                <div>         
                    <input className='input' name = 'nome' value = {this.state.nome} onChange = {this.onChange} type = 'text'/>
                </div>
                <div className = 'text'>
                    Texto em CapsLock:
                </div>
                <div className = 'value'>
                <br/>
                    <CapsLock >{this.state.nome}</CapsLock>
                </div>
                
            </div>
        )
    }

}


function CapsLock(props){ 
    const texto_input = props.children;
    const texto_output = texto_input.toUpperCase();
    return <div> {texto_output} </div>
}



export default Home;