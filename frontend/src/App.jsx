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
import 'semantic-ui-css/semantic.min.css'
// import { Segment, Header, Grid, GridColumn } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from 'react-bootstrap'


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

      case 'UPDATE_INPUT_VIEW_DAYS':
            return update(state, { inputViewDay: {$set: action.data}});
            
      case 'UPDATE_HORA_ESCOLHIDA':
            return update(state, { horaEscolhida: {$set: action.data}});
            
      default:
          return initialState;
  }
}

const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/getMembers/`,)
    initialState.todosMembros = result.data
  }

useEffect(() => {fetchData()},[])

  const [state, dispatch] = useReducer(reducer, initialState);

   return(<div>
      
      <Container>
          <Row><Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/membro">Membro</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Row>
            <AppContext.Provider value={{ state, dispatch }}>
            <Col md="auto"><Calendar/></Col>
            <Col md="auto"><Day /></Col>
            <Col>{state.inputViewDetails && <Details/>}</Col>
            </AppContext.Provider>
            </Row>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/membro">
            {/* <Home /> */}
            Membro2
          </Route>
        </Switch>
      </div>
    </Router>
    </Row>
    </Container>
    </div>)
}