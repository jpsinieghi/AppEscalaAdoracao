import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Detailsmember from "./Detailsmember"



export default function Members() {

    const {state, dispatch} = useContext(AppContext);

    // useEffect(() => {changeDetails(false)},[])

    const showmemberDetails = (newData) => {
        dispatch({ type: 'SHOWMEMBERDETAILS', data: true,});
        dispatch({ type: 'MEMBERDETAILS', data: newData,});
               
        
      }    

    return(
        <Row>
        <Col md="auto">
            {state.allMembers.map((item, index) => {
                 if(item.status){
                    return(<div key={index}><Button variant="success" size="lg" block onClick={() => showmemberDetails(item)}>{item.nome}</Button></div>)
                    
                }})}
        </Col>

        <Col md="auto">
        {state.allMembers.map((item, index) => {
                if(!item.status && item.sid){
                 return(<div key={index}><Button variant="secondary" size="lg" block onClick={() => showmemberDetails(item)}>{item.nome}</Button></div>)
        }})}
        
        </Col>

        <Col><Detailsmember/></Col>
               


        </Row>
        
    
    )


    



}