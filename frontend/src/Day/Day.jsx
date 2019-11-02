import React, {Component} from 'react';
import Hour from '../Hour/Hour';
import axios from 'axios';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: [],
           intervalIsSet: false,
           estadoInicial : true
        }
    }


    getDataFromDb = (date) => {
        var url = new URL(`http://localhost:3001/api/getData/${date}`)
        fetch(url)
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
        
        };


    putDataToDB = (data) => {
          let currentIds = this.state.data.map((data) => data.id);
          let idToBeAdded = 0;
          while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
          }
          

          axios.post('http://localhost:3001/api/putData', {
            dia: data.dia,
            hora: data.hora,
            sid: data.sid,
            status: data.status
          });
        };

    criarHoras = (date) => {

      
      

    }

    render(){

      if(this.props.dataEscolhida === null){
        this.criarHoras(this.props.dataEscolhida)
        
      }else{
        this.getDataFromDb(this.props.dataEscolhida);
        // if (!this.state.intervalIsSet) {
        //   let interval = setInterval(this.getDataFromDb, 1000);
        //   this.setState({ intervalIsSet: interval });
        // }
    
      }


      let returnData = (
              <ul>{this.state.data.map(dado => 
                  <li>"_id":{dado._id} , "dia":{dado.dia} , "hora": {dado.hora} , "sid": {dado.sid} , "status": {dado.status}</li>
              )}</ul>
      )
      
      let horas
      if(this.props.dataEscolhida === null){
        horas = (<div>Escolha um dia no Calendario</div>)
      }else{
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

      }  


    return(
            <div className="Day"> 

                <p>Data Escolhida: {this.props.dataEscolhida}</p>
                {horas}
                {returnData}

            </div>

    )
    }
}


