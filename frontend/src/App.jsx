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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';


//Import immutability-helper
import update from 'immutability-helper';


// Create context object
export const AppContext = React.createContext();


export default function App() {


  // Set up Initial State
  const initialState = {
    daySelected: [],
    hoursofdaySelected: [],
    // hourSelected: [],
    showDetails: false,
    showmemberDetails: false,
    showHours: false,
    allMembers: [],
    memberDetails: [],
    hourselected: null,
    logEventos: [],
    memberSchedule: []


  };

  function reducer(state, action) {
    switch (action.type) {
      case 'DAYSELECTED':
        return update(state, { daySelected: { $set: action.data } });

      case 'HOURSOFDAYSELECTED':
        return update(state, { hoursofdaySelected: { $set: action.data } });

      // case 'HOURSELECTED':
      //     return update(state, { hourSelected: {$set: action.data}});

      case 'SHOWDETAILS':
        return update(state, { showDetails: { $set: action.data } });

      case 'SHOWMEMBERDETAILS':
        return update(state, { showmemberDetails: { $set: action.data } });

      case 'SHOWHOURS':
        return update(state, { showHours: { $set: action.data } });

      case 'HOURSELECTED':
        return update(state, { hourselected: { $set: action.data } });

      case 'MEMBERDETAILS':
        return update(state, { memberDetails: { $set: action.data } });

      case 'MEMBERDATA':
        return update(state, { allMembers: { $set: action.data } });

      case 'MEMBERSCHEDULE':
        return update(state, { memberSchedule: { $set: action.data } });

      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  //Pega todos os Membros por API no Backend para alimentar a variavel initialState.allMembers
  const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/members/`,)
    initialState.allMembers = result.data
  }
  useEffect(() => { fetchData() }, [])
  


  return (<div>
    <AppContext.Provider value={{ state, dispatch }}>
      <Container>
        <Row>
          <Router>
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
                    <Col md="auto"><Calendar /></Col>
                    <Col md="auto"><Day /></Col>
                    <Col>{state.showDetails && <Details />}</Col>

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