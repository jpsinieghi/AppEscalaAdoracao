import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import { Card, Button, ButtonGroup, Alert, Form} from 'react-bootstrap'

export default function Detailsmember() {

    const {state, dispatch} = useContext(AppContext);

    if(!state.showmemberDetails){
    return(<div><h1>Escolha um Membro</h1></div>)
    }else{
        return(<div>
        
               {state.memberDetails.nome}

               
        
        
        </div>)
    }



}