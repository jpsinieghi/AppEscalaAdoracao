import React, { useContext } from 'react';
import { AppContext } from "../App"
// import { Card, Icon, Image } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup, Alert } from 'react-bootstrap'




export default function Details (){
    
  const {state} = useContext(AppContext);


  const setStatus = (data) => {


  }


  const details = (<div>

              
                <Card.Title>{state.todosMembros.data.map((item, index) => {
                                 if(item.sid === state.inputHour.sid){
                                   return(<div key={index}>{item.nome}</div>)}})}</Card.Title>
                <Card.Text> ID: {state.inputHour._id}                 
                  <p>Some quick example text to build on the card title and make up the bulk of
                  the card's content.</p>
                </Card.Text>
                
                </div>)              
               

            

  
               const Mybuttons = () => {
                    
                if(state.inputHour.status === 0){
                    return(<Button variant="primary">Cadastrar Adorador</Button>)}

                if(state.inputHour.status === 1){
                    return(<div><Button variant="warning">Confirmar</Button>
                            <Button variant="danger" onClick={() => setStatus(0)}>Cancelar</Button></div>
                    )}
                
                if(state.inputHour.status === 2){
                  return(<Alert variant='success'>
                    Adorador confirmado !!!
                  </Alert>)}
              }

                    

  
  
  
  
  // const changeInputValue = (newValue) => {

  //   dispatch({ type: 'UPDATE_SIDTONAME', data: newValue,});
    

  // };

  
        // return(<div>

        //      <Card>
        //          <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
        //          <Card.Content>
        //          <Card.Header>{state.todosMembros.data.map((item, index) => {
        //                         if(item.sid === state.inputHour.sid){
        //                           return(<div key={index}>{item.nome}</div>)}})}</Card.Header>

                
        //          <Card.Meta><span className='date'>{state.inputHour.dia}</span></Card.Meta>
        //          <Card.Description>{state.inputHour.hora}</Card.Description>
        //          </Card.Content>

        //          <Card.Content extra>
        //            <a>
        //            <Icon name='user' />
        //            {state.inputHour.status}
        //            </a>
        //          </Card.Content>
        //      </Card>
        //     <p>Teste Details</p>
        //     <p>Dia: {state.inputHour.dia}</p>
        //     <p>Hora: {state.inputHour.hora}</p>
        //     <>{state.todosMembros.data.map((item, index) => {
        //     if(item.sid === state.inputHour.sid){
        //       return(<p key={index}>Nome: {item.nome}</p>)
        //     }

        //   })}</>

        //     <p>Status: {state.inputHour.status}</p>
            
        //     </div>
        //     )

          return(<div>

              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg" />
              <Card.Body>

            {details}
            
            <ButtonGroup vertical>
            <Mybuttons />
            </ButtonGroup>
            
            </Card.Body>
            </Card>

          </div>)

  

    
    
}