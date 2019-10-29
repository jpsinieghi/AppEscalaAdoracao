import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

export default class Hour extends Component {
    constructor(props){
        super(props)
        this.state = {dados: []}

    }

    
    updateState = (data) =>{
        this.setState({dados: data}, this.props.update(data))
        
        

    }
    
    statusButton = data => {
        if (data.status === 1) {
            return(
                <Button 
                    primary onClick={() => this.updateState(this.props.dados)}>
                    {this.props.dados.hora}
                </Button>)
            } else {
                return(
                <Button
                    secondary onClick={() => this.updateState(this.props.dados)}>
                    {this.props.dados.hora}
                </Button>)
            }

    }

    render()
        {

        return(<div>{this.statusButton(this.props.dados)}</div>)
    
    }
}
