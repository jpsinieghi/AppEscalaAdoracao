import React, {Component} from 'react';
import Hour from '../Hour/Hour';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            horasDia: [ {dia: '1572145200000', hora: '07:00', sid: 1234, status: 1},
                        {hora: '08:00', sid: 2343, status: 2},
                        {hora: '09:00', sid: 6765, status: 1},
                        {hora: '10:00', sid: 7867, status: 1},
                        {hora: '11:00', sid: 2986, status: 1},
                        {hora: '12:00', sid: 1235, status: 2},
                        {hora: '13:00', sid: 5456, status: 1},
                        {hora: '14:00', sid: 9834, status: 1},
                        {hora: '15:00', sid: 2367, status: 1},
                        {hora: '16:00', sid: 1535, status: 1},
                        {hora: '17:00', sid: 8876, status: 1},
                        {hora: '18:00', sid: 4533, status: 1}

            ],
            horaEscolhida: null
        }
    }
   
    
   
    render(){

        let horas = null;

        horas = (

            <div>
                {/* fazer uma funcao que busque no BD hora, sid e status do dia que recebo em this.props.diaEscolhido .. por enquanto uso this.state.horasDia*/}
            {this.state.horasDia.map((data, index) => {
            return <Hour
                update={this.props.update}
                hora={data.hora}
                sid={data.sid}
                status={data.status}
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


