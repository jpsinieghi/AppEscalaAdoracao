import React, {Component} from 'react';

export default class Details extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
            <p>{this.props.detalheEscolhido}</p>
                       
            </div>


        )
    }
}