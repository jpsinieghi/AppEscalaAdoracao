import React, {Component} from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", ptBR); 


export default class Calendar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    
       
    sendData = (data) =>{
        this.datae = new Date()
        this.datae = data
        this.props.myCallBackSendData(this.datae.valueOf()) //   toLocaleDateString());
    }

    render(){
        return(
            <div className="Calendar">
            <DatePicker
                onChange={this.sendData}
                locale="pt-BR"
                inline
                />
            
                       
            </div>


        )
    }
}