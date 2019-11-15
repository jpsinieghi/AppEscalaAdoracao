import React, { useContext, useState } from 'react';
import { AppContext } from "../App"
// import { Card, Icon, Image } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup, Alert } from 'react-bootstrap'




export default function Details (){
    
  const {state, dispatch} = useContext(AppContext);
  

  const changeInputValue = (newValue) => {

    dispatch({ type: 'UPDATE_INPUT_HOUR_DAY', data: newValue,});
    dispatch({ type: 'UPDATE_INPUT_VIEW_DETAILS', data: true,});
    
  };


    const newStatus = (newStatus, newHora) => {
    
    //atualizar status no mongodb no _id=5dc5b5bbe4d17c26d8938532
    //setCount(count + 1)
    
    const newData = state.inputHour.slice()
    
    const objIndex = newData.findIndex((obj => obj.hora == newHora));
    if(newStatus === 0){
      newData[objIndex].sid = 0
      newData[objIndex].status = newStatus
    }else{
      newData[objIndex].status = newStatus
    }
    


    dispatch({ type: 'UPDATE_INPUT_HOUR', data: newData,});
    
  
  }

  const Mydetails = () => {
    const [data, setData] = useState(0);  
    const obj = state.inputHour.find(item => item.hora === state.horaEscolhida)

      return(<div>

      <Card.Title>{state.todosMembros.data.map((item, index) => {
                        if(item.sid === obj.sid){
                          return(<div key={index}>{item.nome}</div>)}})}</Card.Title>
      <Card.Text> ID: {obj._id}                 
        <p>Some quick example text to build on the card title and make up the bulk of
        the card's content.</p>
      </Card.Text>
      
      </div>)}              
               

  const Mybuttons = () => {
    // const [count, setCount] = useState(state.horaEscolhida);
    
    const obj = state.inputHour.find(item => item.hora === state.horaEscolhida)
    // if(obj){return (<div>Teste: {obj.hora}</div>)}
    if(obj.status === 0){
        return(<Button variant="primary">Cadastrar Adorador</Button>)}

    if(obj.status === 1){
        return(<div><Button variant="warning" onClick={() => newStatus(2,obj.hora)}>Confirmar</Button>
                <Button variant="danger" onClick={() => newStatus(0,obj.hora)}> Cancelar</Button></div>
                //chamar funcao que atualiza no BD o status para 0 deste _id
                //fazer um novo '/getData/:dataEscolhida' ou conseguir setar state.inputHour.status = 0
                
        )}
    
    if(obj.status === 2){
      return(<Alert variant='success'>
        Adorador confirmado !!!
      </Alert>)}
  }

      return(<div>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg" />
      <Card.Body>


      <Mydetails />
      <ButtonGroup vertical>
      <Mybuttons />
      </ButtonGroup>

      </Card.Body>
      </Card>

      </div>)

  

    
    
}