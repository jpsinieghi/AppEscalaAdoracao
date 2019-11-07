import React, {useEffect} from 'react';
import {Button} from 'semantic-ui-react'

export default function Hour(dados) {
    


    useEffect(() => {

        if (dados.status === 1) {
            return(
                <Button 
                    primary onClick={() => {}}>
                    {this.props.dados.hora}
                </Button>)
            } else {
                return(
                <Button
                    secondary onClick={() => {}}>
                    {this.props.dados.hora}
                </Button>)
            }



    })

   
    

    
    
}
