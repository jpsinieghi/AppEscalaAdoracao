import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'


const HORAS = [8,9,10,11,12,13]


export default function Day() {
   
  const {state, dispatch} = useContext(AppContext);

  const changeInputValue = (newValue) => {
    
    dispatch({ type: 'UPDATE_INPUT_HOUR_DAY', data: newValue,});
    dispatch({ type: 'UPDATE_INPUT_VIEW_DETAILS', data: true,});
    dispatch({ type: 'UPDATE_HORA_ESCOLHIDA', data: newValue.hora,});
    
  };


  const changeDetails = () => {
    dispatch({ type: 'UPDATE_INPUT_VIEW_DETAILS', data: false,});
  }

  const changeDays = () => {
    dispatch({ type: 'UPDATE_INPUT_VIEW_DAYS', data: true,});
  }
  
  const [dados, setDados] = useState({data: []})
  const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/data/${state.inputDate}`,)
    setDados(result.data)
    dispatch({ type: 'UPDATE_INPUT_HOUR', data: result.data.data,});
  }
  
  const putData = (data) => {
    //    
    // const LoaderExampleInlineCentered = () => <Loader active inline='centered' />
    changeDays()
    // Send a POST request
        data.map((item, index) => { 
        axios({
             method: 'post',
             url: 'http://localhost:3001/api/data',
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
  
  useEffect(() => {fetchData()},[state.inputDate])

  if(state.inputViewDay){
     return(<div><h1>
      Escolha uma data no Calendário.
    </h1></div>)
   }
   if(dados.data.length === 0){
    changeDetails()
    return(<div className="Day"><Button primary="true" size="lg" onClick={() => putData(HORAS)}>Criar agenda para este dia</Button></div>)
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