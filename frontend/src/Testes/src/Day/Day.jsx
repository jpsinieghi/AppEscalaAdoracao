import React, {Component} from 'react';
import Hour from '../Hour/Hour';
import axios from 'axios';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: [],
           intervalIsSet: false,
           estadoInicial : true,
           dataEscolhida: 1572577200000
        }
    }

    verificaNull = data =>{
      if(data === null){
        //criar o registro no BD
        var data = [{dia: data.dataEscolhida, hora: 8, sid: 1, status: 0},
                    {dia: data.dataEscolhida, hora: 9, sid: 1, status: 0},
                    {dia: data.dataEscolhida, hora: 10, sid: 1, status: 0},
                    {dia: data.dataEscolhida, hora: 11, sid: 1, status: 0},
                    {dia: data.dataEscolhida, hora: 12, sid: 1, status: 0},
                    {dia: data.dataEscolhida, hora: 13, sid: 1, status: 0},
                  ]
        this.putDataToDB(data)

      }

    }


    getDataFromDb = (date) => {
        var url = new URL(`http://localhost:3001/api/getData/${date}`)
        fetch(url)
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
        
          
        }
        
        


    putDataToDB = (data) => {
            axios.post('http://localhost:3001/api/putData', {
            dia: data.dia,
            hora: data.hora,
            sid: data.sid,
            status: data.status
          });
        };

        

    render(){

      let horas
      const dia = this.props.dataEscolhida
      
      if(this.state.dataEscolhida === null){
        horas = (<div>Escolha um dia no Calendario</div>)}

      if(this.state.dataEscolhida !== this.props.dataEscolhida){


        //  this.setState({dataEscolhida : this.props.dataEscolhida},this.getDataFromDb(this.state.dataEscolhida))
        this.setState({dataEscolhida : this.props.dataEscolhida})
        
        this.getDataFromDb(1572577200000)
        
      }
      
      let returnData = (
               <ul>{this.state.data.map(dado => 
                   <li>"_id":{dado._id} , "dia":{dado.dia} , "hora": {dado.hora} , "sid": {dado.sid} , "status": {dado.status}</li>
               )}</ul>
       )
      
      
      
         horas = (

             <div>{this.state.data.map((data, index) => {
               return (
            
             <Hour
                 update={this.props.update}
                 dados={data}
                 dataEscolhida={this.props.dataEscolhida}
                 key={index}/>
                   )})}
             </div>
            
        )

      


    return(
            <div className="Day"> 

                <p>Data Escolhida Props: {this.props.dataEscolhida}</p>
                <p>Data Escolhida State: {this.state.dataEscolhida}</p>

                {horas}
                {returnData}

            </div>

    )
    }
}


