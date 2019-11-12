import React, { useContext } from 'react';
import { AppContext } from "../App"
import { Card, Icon, Image } from 'semantic-ui-react'



export default function Details (){
    
  const {state} = useContext(AppContext);
  
  // const changeInputValue = (newValue) => {

  //   dispatch({ type: 'UPDATE_SIDTONAME', data: newValue,});
    

  // };

  
        return(<div>

             <Card>
                 <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                 <Card.Content>
                 <Card.Header>{state.todosMembros.data.map((item, index) => {
                                if(item.sid === state.inputHour.sid){
                                  return(<div key={index}>{item.nome}</div>)}})}</Card.Header>

                
                 <Card.Meta><span className='date'>{state.inputHour.dia}</span></Card.Meta>
                 <Card.Description>{state.inputHour.hora}</Card.Description>
                 </Card.Content>

                 <Card.Content extra>
                   <a>
                   <Icon name='user' />
                   {state.inputHour.status}
                   </a>
                 </Card.Content>
             </Card>
            <p>Teste Details</p>
            <p>Dia: {state.inputHour.dia}</p>
            <p>Hora: {state.inputHour.hora}</p>
            <>{state.todosMembros.data.map((item, index) => {
            if(item.sid === state.inputHour.sid){
              return(<p key={index}>Nome: {item.nome}</p>)
            }

          })}</>

            <p>Status: {state.inputHour.status}</p>
            
            </div>
            )


  

    
    
}