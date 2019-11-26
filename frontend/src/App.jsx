import React, { useReducer, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Day from './Day/Day'
import Details from './Details/Details'
import Calendar from './Calendar/Calendar'
import Members from './Members/Members'
import 'semantic-ui-css/semantic.min.css'
// import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'


import axios from 'axios';

//Import immutability-helper
import update from 'immutability-helper';


// Create context object
export const AppContext = React.createContext();


export default function App () {


  // Set up Initial State
const initialState = {
  inputDate: [],
  inputHour: [],
  inputHourDay: [],
  inputViewDetails: false,
  editViewDetails: false,
  inputViewDay: true,
  todosMembros: [],
  horaEscolhida: null,
  logEventos: []

 
};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return update(state, { inputDate: {$set: action.data}});

      case 'UPDATE_INPUT_HOUR':
          return update(state, { inputHour: {$set: action.data}});

      case 'UPDATE_INPUT_HOUR_DAY':
          return update(state, { inputHourDay: {$set: action.data}});
  
      case 'UPDATE_INPUT_VIEW_DETAILS':
          return update(state, { inputViewDetails: {$set: action.data}});

      case 'UPDATE_EDIT_VIEW_DETAILS':
          return update(state, { editViewDetails: {$set: action.data}});

      case 'UPDATE_INPUT_VIEW_DAYS':
            return update(state, { inputViewDay: {$set: action.data}});
            
      case 'UPDATE_HORA_ESCOLHIDA':
            return update(state, { horaEscolhida: {$set: action.data}});
            
      default:
          return initialState;
  }
}

const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/members/`,)
    initialState.todosMembros = result.data
  }

useEffect(() => {fetchData()},[])

  const [state, dispatch] = useReducer(reducer, initialState);

   return(<div>
      <AppContext.Provider value={{ state, dispatch }}>
      <Container>
          <Row><Router>
      <div>
        <ul>
          <li>
            <Link to="">Home</Link>
            </li>
            <li>
            <Link to="/membro">Membro</Link>
          </li>
        </ul>
        <hr />
       
        <Switch>
        
          <Route exact path="/">
            <Row>
            <Col md="auto"><Calendar/></Col>
            <Col md="auto"><Day /></Col>
            <Col>{state.inputViewDetails && <Details/>}</Col>
           
            </Row>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/membro">
            <Row>
              <Members />
            </Row>
          </Route>
          
        </Switch>
        
      </div>
    </Router>
    </Row>
    </Container>
    </AppContext.Provider>
    </div>)
}