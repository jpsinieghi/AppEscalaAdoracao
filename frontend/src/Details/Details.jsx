import React, { useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'



export default function Details (){
    
  const {state, dispatch} = useContext(AppContext);
  
      
    
        return(<div>

             <Card>
                 <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                 <Card.Content>
                 <Card.Header>{state.inputHour.sid}</Card.Header>
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
            <p>Sid: {state.inputHour.sid}</p>
            <p>Status: {state.inputHour.status}</p>
            
            </div>
            )


  

    
    
}