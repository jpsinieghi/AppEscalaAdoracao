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


  


  verifyData = sid => {
      //verificar se tem alguem no horario.. select * from tabela where day === this.props.diaescolhido e hour === this.props.horaescolhido
      //se nao tiver.. 
      //<Card>sid + foto padrao + status (optar por 0=nao confirmado ou 1=confirmado)botao salvar (insert um registro no BD com diaescolhido + hora + sid + status</Card>

        //se sid === null entao this.setState(sid:this.props.sidEscolhido)
  
        


    


    if (this.dados.state === null) {
        return(
            <Card>
                <Image src='http://www.nicolaartesacra.com.br/wp-content/uploads/2018/10/S-022-290x290.jpg' wrapped ui={false} />
                <Card.Content>
      <Card.Header>Matthew</Card.Header>
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
        } else 
        {
            return(
                <div></div>)
        }

    }



    render(){
        

        return(
            <div>
            
                <p>{this.props.dados.sid}</p>
            
                       
            </div>


        )
    }
}