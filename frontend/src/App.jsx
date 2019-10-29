import React, { Component } from 'react'
import './App.css'
import Day from './Day/Day'
import Details from './Details/Details'
import Calendar from './Calendar/Calendar'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";

export default class App extends Component {
  
  state = {
    dados: [],
    dataEscolhida: null
    
  }

  myCallbackDia = (data) =>{
    this.setState({dataEscolhida: data})
  }
  
  update = (data) => {
    this.setState({dados: data}) 
  }

  

  render(){
      return(<div>
        <Header as="h3">Escada de Adoração da Comunidade Canção Nova</Header>
        <Segment>
           <Grid columns={3} relaxed='very'>
            <GridColumn>
              <Calendar myCallBackSendData={this.myCallbackDia}/>
            </GridColumn>
         
            <GridColumn>
              <Day update={this.update}/>  
            </GridColumn>
          
            <GridColumn>
              <Details dados={this.state.dados} />
            </GridColumn>
           </Grid>

          
            
        </Segment>
        </div>
      )

  }
}