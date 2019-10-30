import React, {Component} from 'react';
import Hour from '../Hour/Hour';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            horasDia: [ {dia: 1572145200000, hora: 7, sid: 1234, status: 1}, //select * from tabela where dia === diaescolhido
                        {dia: 1572145200000, hora: 8, sid: null, status: 0},
                        {dia: 1572145200000, hora: 9, sid: null, status: 0},
                        {dia: 1572145200000, hora: 10, sid: 7867, status: 1},
                        {dia: 1572145200000, hora: 11, sid: 2986, status: 1}
                        

            ],
            diaEscolhido: null,
            data: [],
            intervalIsSet: false
        }
    }
   
    // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
       
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };

    render(){

        let horas = null;
        let horas2 = null;
        

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

        horas2 = (

            <div>
               
            {this.state.data.map((data, index) => {
            
            return <p>{data}</p>
            
            })}
            </div>
            
        )


    return(
            <div className="Day"> 

                        
                <p>Data Escolhida: {this.props.dataEscolhida}</p>
                <p>DataDB: {this.state.data}</p>
                
                {horas}
                {/* {horas2} */}


            </div>


    )


    }
    





}


