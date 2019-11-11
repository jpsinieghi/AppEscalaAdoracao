import React, { useReducer } from 'react'
import './App.css'
import Day from './Day/Day'
import Details from './Details/Details'
import Calendar from './Calendar/Calendar'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";

//Import immutability-helper
import update from 'immutability-helper';

// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const initialState = {
  inputDate: null,
  inputHour: [],
  inputViewDetails: false,
  sidtoName: []

};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return update(state, { inputDate: {$set: action.data}});

      case 'UPDATE_INPUT_HOUR':
          return update(state, { inputHour: {$set: action.data}});

      case 'UPDATE_INPUT_VIEW_DETAILS':
          return update(state, { inputViewDetails: {$set: action.data}});

      case 'UPDATE_SIDTONAME':
            return update(state, { sidtoName: {$set: action.data}});
      
  
      default:
          return initialState;
  }
}

export default function App () {
   
  const [state, dispatch] = useReducer(reducer, initialState);

    return(<div>
        <Header as="h3">Escada de Adoração da Comunidade Canção Nova</Header>
        <Segment>
           <Grid columns={3} relaxed='very'>

           <AppContext.Provider value={{ state, dispatch }}>

            <GridColumn>
              <Calendar/>
            </GridColumn>
           
            <GridColumn>
              {state.inputDate && <Day />}
            </GridColumn>

            <GridColumn>
              {state.inputViewDetails && <Details/>}
            </GridColumn>

            </AppContext.Provider>
           </Grid>
            
        </Segment>
        </div>
      )
}