import React, { useReducer, useEffect } from 'react'
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
            
      case 'TESTE':
              return update(state, { teste: {$set: action.data}});
                    
      
      default:
          return initialState;
  }
}

const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/getMembro/`,)
    initialState.todosMembros = result.data
  }

useEffect(() => {fetchData()},[])

  const [state, dispatch] = useReducer(reducer, initialState);

   return(<div>
      
      <Container>
          <Row>
          <AppContext.Provider value={{ state, dispatch }}>
          <Col md="auto"><Calendar/></Col>
          <Col md="auto"><Day /></Col>
          <Col>{state.inputViewDetails && <Details/>}</Col>
          </AppContext.Provider>

          </Row>
      </Container>
      <Container>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Evento</th>
      <th>Dia</th>
      <th>Hora</th>
      <th>Adorador Confirmado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      </Container>


    </div>)
}