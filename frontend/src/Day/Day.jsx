import React, {Component} from 'react';
import Hour from '../Hour/Hour';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            horasDia: [ {dia: 1572145200000, hora: 7, sid: 1234, status: 1}, //select * from tabela where dia === diaescolhido
                        {dia: 1572145200000, hora: 8, sid: 2343, status: 2},
                        {dia: 1572145200000, hora: 9, sid: null, status: 0},
                        {dia: 1572145200000, hora: 10, sid: 7867, status: 1},
                        {dia: 1572145200000, hora: 11, sid: 2986, status: 1}
                        

            ],
            horaEscolhida: null
        }
    }
   
    
   
    render(){

        let horas = null;

        horas = (

            <div>
               
            {this.state.horasDia.map((data, index) => {
            
            return <Hour
                update={this.props.update}
                dados={data}
                key={index}/>
            })}
            </div>
            
        )


    return(
            <div className="Day"> 
                
                <p>{this.props.diaEscolhido}</p>
                {horas}


            </div>


    )


    }
    





}


