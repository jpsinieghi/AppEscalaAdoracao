import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Detailsmember from "./Detailsmember"
import axios from 'axios';

export default function Members() {
    const { state, dispatch } = useContext(AppContext);

    const allDataSchedulebyUser = async (dado) => {
        
        //atualiza o memberSchedule
        
            //const result = await axios(`http://localhost:3001/api/members/`,)
            const result = await axios(`http://localhost:3001/api/data/schedule/${dado.sid}`,)
            console.log(result.data.data)
            dispatch({ type: 'MEMBERSCHEDULE', data: result.data.data, });
          
        //return result.data.data


    }

    const showmemberDetails = (newData) => {
        //chamar funcao para pegar Schedule do membro
        dispatch({ type: 'SHOWMEMBERDETAILS', data: true, });
        dispatch({ type: 'MEMBERDETAILS', data: newData, });
        allDataSchedulebyUser(newData)
    }
    return (
        <Row>
            <Col md="auto">
                {state.allMembers.map((item, index) => {
                    if (item.status) {
                        return (<div key={index}><Button variant="success" size="lg" block onClick={() => showmemberDetails(item)}>{item.nome}</Button></div>)
                    }
                    if (!item.status && item.sid) {
                        return (<div key={index}><Button variant="secondary" size="lg" block onClick={() => showmemberDetails(item)}>{item.nome}</Button></div>)
                    }
                })}
            </Col>
            <Col><Detailsmember /></Col>
        </Row>
    )
}