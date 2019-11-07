import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
import {Button} from 'semantic-ui-react'

const HORAS = [8,9,10,11,12,13]


export default function Day() {
   
  const {state, dispatch} = useContext(AppContext);
  // const [date, setDate] = useState(null)
  const [dados, setDados] = useState({data: []})
  const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/getData/${state.inputDate}`,)
    setDados(result.data)
  }
   
  const putData = (data) => {
    // Send a POST request
     data.map(item => { 
    

      axios({
            method: 'post',
            url: 'http://localhost:3001/api/putData',
            data: {
             dia: state.inputDate,
             hora: item,
             sid: 0,
             status: 0
            },
            
         })
    
    })

    
    
    
  }

  useEffect(() => {fetchData()},[state.inputDate])

  if(dados.data.length === 0){
    return(<div className="Day"><Button primary onClick={() => {putData(HORAS)}}>Criar agenda para este dia</Button></div>)
  }else{
    return(<div className="Day">
              {dados.data.map(item => {
                  if(item.status === 1){
                    return(
                      <div><Button primary onClick={() => {}}>{item.hora}</Button></div>)}
                  else{
                    return(
                      <div><Button secondary onClick={() => {}}>{item.hora}</Button></div>)}
                })}
         </div>)}}