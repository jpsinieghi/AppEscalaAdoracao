import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
// import {Button} from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const HORAS = [8,9,10,11,12,13]


export default function Day() {
   
  const {state, dispatch} = useContext(AppContext);

  const changeInputValue = (newValue) => {

    dispatch({ type: 'UPDATE_INPUT_HOUR', data: newValue,});
    dispatch({ type: 'UPDATE_INPUT_VIEW_DETAILS', data: true,});
    
  };

  
  const [dados, setDados] = useState({data: []})
  const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/getData/${state.inputDate}`,)
    setDados(result.data)
  }
  
  const putData = (data) => {
    // Send a POST request
        data.map((item, index) => { 
        axios({
             method: 'post',
             url: 'http://localhost:3001/api/putData',
             data: {
              dia: state.inputDate,
              hora: item,
              sid: 0,
              status: 0
             },
             key: index
            
          })
        })

    }
     //chamar uma animaçao de criação
     
    
  useEffect(() => {fetchData()},[state.inputDate])

  
   if(state.inputViewDay){
     return(<div><h1>
      Escolha uma data no Calendário.
    </h1></div>)
   }
   if(dados.data.length === 0){
    return(<div className="Day"><Button primary size="lg" onClick={() => putData(HORAS)}>Criar agenda para este dia</Button></div>)
  }else{
    return(<div className="Day">
              {dados.data.map((item, index) => {
                  if(item.status === 0){
                    return(
                      <div key={index}><Button variant="secondary" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}</Button></div>)}
                  else if(item.status === 1) {
                    return(
                      <div key={index}><Button variant="warning" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}</Button></div>)}
                        else {
                          return(<div key={index}><Button variant="success" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}</Button></div>)}
                })}
         </div>)}}