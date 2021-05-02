import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import { Row, Col, Card, Button, ButtonGroup, Alert, Form } from 'react-bootstrap'

import axios from 'axios';

export default function Detailsmember() {

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (event) => {


        const newData = state.allMembers.slice()
        const objIndex = newData.findIndex((obj => obj._id === state.memberDetails._id));
        newData[objIndex].status = event.target.checked

        dispatch({ type: 'MEMBERDATA', data: newData, });
        updateData(newData[objIndex])
        //log2BD(newData[objIndex])
    }

    const updateData = async (data) => {
        try {
            const res = await axios.put(`http://localhost:3001/api/members/${data._id}`, {
                sid: data.sid,
                nome: data.nome,
                status: data.status
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };





    if (!state.showmemberDetails) {
        return (<div><h1>Escolha um Membro</h1></div>)
    } else {
        return (<div>


            {state.memberDetails.nome}




            <Row>
                <Col>
                    <Form>

                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Ativo"
                            checked={state.memberDetails.status}
                            onChange={handleChange}
                        />



                    </Form>
               
                    <p>Datas e horarios de escala</p>
                    {state.memberSchedule.map((item, index) => {

                        return (
                            <div>{(new Date(item.dia).toLocaleString())} as {item.hora}:00</div>
                        )


                    })}


                </Col>
            </Row>


        </div>)
    }



}