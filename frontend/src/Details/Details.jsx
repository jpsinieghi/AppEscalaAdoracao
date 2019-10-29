import React, {Component} from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'



export default class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            intervalIsSet: false
        }
    }


    // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
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

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      
      date: this.data.date,
      hour: this.data.hour,
      sid: this.data.sid,
      status: this.data.status


    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };


  verifyData = sid => {
      //verificar se tem alguem no horario.. select * from tabela where day === this.props.diaescolhido e hour === this.props.horaescolhido
      //se nao tiver.. 
      //<Card>sid + foto padrao + status (optar por 0=nao confirmado ou 1=confirmado)botao salvar (insert um registro no BD com diaescolhido + hora + sid + status</Card>

        //se sid === null entao this.setState(sid:this.props.sidEscolhido)
        


    


    if (this.data === null) {
        return(
            <Card>
                <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
            
            </Card>
            
            //chamar componente 
            )
        } else 
        {
            return(
                <div></div>)
        }

    }



    render(){
        

        return(
            <div>
            
            {/* {this.verifyData(this.props.sidEscolhido)} */}
            <p>{this.props.sidEscolhido}</p>
            <p>{this.props.hourEscolhido}</p>
                       
            </div>


        )
    }
}