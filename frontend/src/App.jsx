import React, { Component } from 'react'
import './App.css'
import Day from './Day/Day'
import Details from './Details/Details'
import Calendar from './Calendar/Calendar'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";

export default class App extends Component {
  
  state = {
    
    diaEscolhido: null,
    detalheEscolhido: null
  }

  
  myCallbackDia = (data) => {
    this.setState({diaEscolhido: data}) 
  }

  update = (data) => {
    this.setState({detalheEscolhido: data}) 
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
              <Day diaEscolhido={this.state.diaEscolhido} update={this.update}/>  
            </GridColumn>
          
            <GridColumn>
              <Details detalheEscolhido={this.state.detalheEscolhido} />
            </GridColumn>
           </Grid>

          
            
        </Segment>
        </div>
      )

  }
}