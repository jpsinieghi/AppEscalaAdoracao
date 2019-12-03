import React, { useContext, useState } from 'react';
import { AppContext } from "../App"
// import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup, Alert, Form} from 'react-bootstrap'

export default function Details (){
    
  const {state, dispatch} = useContext(AppContext);
  

    const newStatus = (newStatus, newHora) => {
    
     const newData = state.hoursofdaySelected.slice()
     const objIndex = newData.findIndex((obj => obj.hora === newHora));
     if(newStatus === 0){
       newData[objIndex].sid = 0
       newData[objIndex].status = newStatus
     }else{
       newData[objIndex].status = newStatus
     }
     dispatch({ type: 'HOURSOFDAYSELECTED', data: newData,});
     updateData(newData[objIndex])
     log2BD(newData[objIndex])
     
    }
    

  const log2BD = async (data) =>{
       const res = await axios({
           method: 'post',
           url: 'http://localhost:3001/api/log',
           data: {
            dia: data.dia,
            hora: data.hora,
            sid: data.sid,
            status: data.status
           }})
  }
  
  const updateData = async (data) => {
            try {
                const res = await axios.put(`http://localhost:3001/api/data/${data._id}`, {
                  dia: data.dia,
                  hora: data.hora,
                  sid: data.sid,
                  status: data.status
                });
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };


  const sid2Nome = (data) => {
    const objIndex = state.allMembers.findIndex((obj => obj.sid == data));
    return(<div>
      {state.allMembers[objIndex].nome}
    </div>)
  }

  const Mydetails = () => {
    

    const obj = state.hoursofdaySelected.find(item => item.hora === state.hourselected)
      return(<div>

      <Card.Title>{sid2Nome(obj.sid)}</Card.Title>
      
      <Card.Text>ID da hora: {obj._id} e {() => {if(true){return(<div>Alerta</div>)}}}</Card.Text>
      </div>)}              
               

  const Mybuttons = () => {
    const [cadastrar, setCadastrar] = useState(false)
    const [value, setValue] = useState(0)
    const change = (event) =>{
      setValue(event.target.value)
      const newData = state.hoursofdaySelected.slice()
      const objIndex = newData.findIndex((obj => obj.hora == state.hourselected));
      newData[objIndex].sid = event.target.value
      newData[objIndex].status = 1
      dispatch({ type: 'HOURSOFDAYSELECTED', data: newData,});
      updateData(newData[objIndex])
      log2BD(newData[objIndex])
      
    }
    
    if(!cadastrar){
    const obj = state.hoursofdaySelected.find(item => item.hora === state.hourselected)
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
             <option>Escolha um Adorador</option>
             {state.allMembers.map((item, index) => {
               if(item.status){
                return(<option value={item.sid} key={index}>{item.nome}</option>)}
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