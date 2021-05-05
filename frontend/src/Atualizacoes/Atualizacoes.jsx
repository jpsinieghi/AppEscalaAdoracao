import React, { useContext } from 'react';
import { AppContext } from "../App"


export default function Atualizacoes() {
    const { state } = useContext(AppContext);
    //const [dados, setDados] = useState({ data: [] })
    //console.log(state.atualizacoes)
   
    
    return (
        <div>
            { state.atualizacoes.map((item, index) => {

                return (
                    <p>{item.status} - {state.allMembers[item.sid].nome} - {new Date(item.dia).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })} - {item.hora}:00</p>
                    
                    
                    )})}
                

        </div>
    )
}