import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

export default class Hour extends Component {
    constructor(props){
        super(props)
        this.state = {sidEscolhida: '', hourEscolhida: ''}

    }

    
    updateState = (sid, hour) =>{
        this.setState({sidEscolhida: sid}, this.props.updateSid(sid))
        this.setState({hourEscolhida: hour}, this.props.updateHour(hour))
        

    }
    
    statusButton = data => {
        if (data === 1) {
            return(
                <Button 
                    primary onClick={() => this.updateState(this.props.sid, this.props.hour)}>
                    {this.props.hora}
                </Button>)
            } else {
                return(
                <Button
                    secondary onClick={() => this.updateState(this.props.sid, this.props.hour)}>
                    {this.props.hora}
                </Button>)
            }

    }

    render()
        {

        return(<div>{this.statusButton(this.props.status)}</div>)
    
    }
}
