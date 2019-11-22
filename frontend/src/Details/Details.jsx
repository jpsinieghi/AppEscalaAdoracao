import React, { useContext, useState } from 'react';
import { AppContext } from "../App"
// import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup, Alert, Form} from 'react-bootstrap'




export default function Details (){
    
  const {state, dispatch} = useContext(AppContext);
  



    const newStatus = (newStatus, newHora) => {
    
    //atualizar status no mongodb no _id=5dc5b5bbe4d17c26d8938532
    //setCount(count + 1)
    
    const newData = state.inputHour.slice()
    
    const objIndex = newData.findIndex((obj => obj.hora === newHora));
    if(newStatus === 0){
      newData[objIndex].sid = 0
      newData[objIndex].status = newStatus
    }else{
      newData[objIndex].status = newStatus
    }
    
    dispatch({ type: 'UPDATE_INPUT_HOUR', data: newData,});
    log2BD(newData[objIndex])
    
  }

  const log2BD = (data) =>{
    
      axios({
           method: 'post',
           url: 'http://localhost:3001/api/log',
           data: {
            dia: data.dia,
            hora: data.hora,
            sid: data.sid,
            status: data.status
           }})
          }


  const sid2Nome = (data) => {
    const objIndex = state.todosMembros.findIndex((obj => obj.sid == data));
    return(<div>
      {state.todosMembros[objIndex].nome}
    </div>)
  }

  const Mydetails = () => {
    const [data, setData] = useState(0);  
    const obj = state.inputHour.find(item => item.hora === state.horaEscolhida)
      return(<div>      
      <Card.Title>{sid2Nome(obj.sid)}</Card.Title>                          
      <Card.Text> ID: {obj._id}                 
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      </div>)}              
               

  const Mybuttons = () => {
    const [cadastrar, setCadastrar] = useState(false)
    const [value, setValue] = useState(0)
    const change = (event) =>{
      setValue(event.target.value)
      const newData = state.inputHour.slice()
      const objIndex = newData.findIndex((obj => obj.hora == state.horaEscolhida));
      newData[objIndex].sid = event.target.value
      newData[objIndex].status = 1
      dispatch({ type: 'UPDATE_INPUT_HOUR', data: newData,});
      //gravar Log no BD
      log2BD(newData[objIndex])
    }
    
    if(!cadastrar){
    const obj = state.inputHour.find(item => item.hora === state.horaEscolhida)
    if(obj.status === 0){
        return(<Button variant="primary" onClick={() => setCadastrar(true)}>Cadastrar Adorador</Button>)}
    if(obj.status === 1){
        return(<div><Button variant="warning" onClick={() => newStatus(2,obj.hora)}>Confirmar</Button>
                <Button variant="danger" onClick={() => newStatus(0,obj.hora)}> Cancelar</Button></div>
        )}
    
    if(obj.status === 2){
      return(<Alert variant='success'>
        Adorador confirmado !!!
      </Alert>)}
    }else{
          return(
             <Form.Group controlId="exampleForm.ControlSelect1">
             <Form.Label>Example select</Form.Label>
             <Form.Control as="select" value={value} onChange={change}>
             {state.todosMembros.map((item, index) => {
               return(<option value={item.sid} key={index}>{item.nome}</option>)
             })}
             </Form.Control>
           </Form.Group>
          )
    }
  }

      return(<div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cleofas.com.br/wp-content/uploads/2011/06/jesus_eucaristico1-copia.png" />
      <Card.Body>
        <Mydetails />
        <ButtonGroup vertical>
          <Mybuttons />
        </ButtonGroup>
      </Card.Body>
      </Card>
      </div>)

  

    
    
}