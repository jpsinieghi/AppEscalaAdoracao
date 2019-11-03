import React, {Component} from 'react';
import Hour from '../Hour/Hour';
import axios from 'axios';

export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: [],
           intervalIsSet: false,
           estadoInicial : true,
           dataEscolhida : null
        }
    }



render(){

    if(this.state.dataEscolhida !== this.props.dataEscolhida){

        this.setState({dataEscolhida : this.props.dataEscolhida})

    }

    
    return(<div>
        
        
        <p>Data Escolhida Props: {this.props.dataEscolhida}</p>

        <p>Data Escolhida State: {this.state.dataEscolhida}</p>

    </div>)

}
}