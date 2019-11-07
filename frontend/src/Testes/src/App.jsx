import React, { useReducer } from 'react'
import './App.css'
import Day2 from './Day/Day2'
import Details from './Details/Details'
import Calendar from './Calendar/Calendar'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";



// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const initialState = {

  dataEscolhida: 'aaa',

};


function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
        return {
         
          
          dataEscolhida: action.data
        };
        default:
        return initialState;
  }
}


export default function App () {
   
  const [state, dispatch] = useReducer(reducer, initialState);

    return(<div>
        <Header as="h3">Escada de Adoração da Comunidade Canção Nova</Header>
        <Segment>
           <Grid columns={2} relaxed='very'>

           <AppContext.Provider value={{ state, dispatch }}>

            <GridColumn>
              {/* <Calendar myCallBackSendData={this.myCallbackDia}/> */}
              <Calendar/>
            </GridColumn>
         
            

            <GridColumn>
              <Day2/>  
            </GridColumn>

            </AppContext.Provider>
          
            {/* <GridColumn>
              <Details dados={this.state.dados}/>
            </GridColumn> */}
           </Grid>

          
            
        </Segment>
        </div>
      )

  
}