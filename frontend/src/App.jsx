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
    dataEscolhida: null,
    allAdoradores: [ 
      {sid: 1234, name: 'Joao Paulo', whats: '12974068788'},
      {sid: 1235, name: 'Ana Luiza', whats: '12988786855'},
      {sid: 1236, name: 'Pedro Henrique', whats: '12987665432'},
      {sid: 1237, name: 'Fernando Silva', whats: '12976867896'}
    ]
      

    
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
              <Day update={this.update} dataEscolhida={this.state.dataEscolhida}/>  
            </GridColumn>
          
            <GridColumn>
              <Details dados={this.state.dados} allAdoradores={this.state.allAdoradores}/>
            </GridColumn>
           </Grid>

          
            
        </Segment>
        </div>
      )

  }
}