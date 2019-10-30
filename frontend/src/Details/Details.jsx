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

  verifyData = dados => {
      
    // if (dados.status === 0) {
        return(
            <Card>
                <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                <Card.Content>
      <Card.Header>{this.props.dados.sid}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
            
            </Card>
            
            //chamar componente 
            )
        // } 

    }



    render(){
        

        return(
            
            
            <div>
            {this.verifyData(this.props.dados)}
                <p>{this.props.dados.sid}</p>
                <p>{this.props.dados.dia}</p>
                <p>{this.props.dados.hora}</p>
                <p>{this.props.dados.status}</p>
            
                       
            </div>


        )
    }
}