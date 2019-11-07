import React, { useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'



export default function Details (){
    
  const {state, dispatch} = useContext(AppContext);
  
      
    
        return(

            // <Card>
            //     <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
            //     <Card.Content>
            //     <Card.Header>{dados.sid}</Card.Header>
            //     <Card.Meta><span className='date'>{dados.dia}</span></Card.Meta>
            //     <Card.Description>{dados.hora}</Card.Description>
            //     </Card.Content>

            //     <Card.Content extra>
            //       <a>
            //       <Icon name='user' />
            //       {dados.status}
            //       </a>
            //     </Card.Content>
            // </Card>
            
            <p>{state.inputText}</p>

            )


  

    
    
}