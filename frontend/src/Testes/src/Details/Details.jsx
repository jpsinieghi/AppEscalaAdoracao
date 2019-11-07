import React, {Component} from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'



export default class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            dados:[]
            
        }
    }

  verifyData = (dados) => {
      
    
        return(
            <Card>
                <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>{dados.sid}</Card.Header>
                <Card.Meta><span className='date'>{dados.dia}</span></Card.Meta>
                <Card.Description>{dados.hora}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <a>
                  <Icon name='user' />
                  {dados.status}
                  </a>
                </Card.Content>
            </Card>
            
            )


    }

    
    render(){
    
      let detalhes
      if(this.props.dados === null){
        detalhes = (<div>Escolha uma hora do dia</div>)
      }else{
        detalhes = (
        <div>{this.verifyData(this.props.dados)}</div>
      )
      }

        return(
            
            <div>
            {detalhes}
            </div>


        )
    }
}