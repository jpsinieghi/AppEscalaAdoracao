import React, {Component} from 'react';
import Hour from '../Hour/Hour';
import axios from 'axios';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: [],
           intervalIsSet: false
        }
        

    }
   
    // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb(this.props.dataEscolhida);
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 10000);
    //   this.setState({ intervalIsSet: interval });
      
      
    // }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
       
  setdataEscolhida = data =>{
    this.setState({ dataEscolhida: data})
  }  

    getDataFromDb = (data) => {
         fetch('http://localhost:3001/api/getData')
        
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
          
      
        };

    render(){

      //para uso de verificação dos dados que chegam do BD
      let returnData = (
      
        
              <ul>
              
              {this.state.data.map(dado => 
                
                <li>"_id":{dado._id} , "dia":{dado.dia} , "hora": {dado.hora} , "sid": {dado.sid} , "status": {dado.status}</li>
              
              )}</ul>

      
      )
      
      let horas

      if(this.props.dataEscolhida === null){
        horas = (<div>Escolha um dia no Calendario</div>)
      }else{
        horas = (

            <div>
               
            {this.state.data.map((data, index) => {
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
                
                {returnData}
                {horas}

            </div>


    )


    }
    





}


