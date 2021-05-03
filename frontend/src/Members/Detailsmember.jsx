import React, { useContext } from 'react';
import { AppContext } from "../App"
import { Row, Col, Form } from 'react-bootstrap'

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

    const updateSchedule = async (data) => {
        try {
            const res = await axios.put(`http://localhost:3001/api/data/${data._id}`, {
                sid: 0,
                hora: data.hora,
                status: 0
            });
            console.log(res.data);
            
        } catch (err) {
            console.error(err);
        }
        //atualizar o state.memberSchedule
        const result = await axios(`http://localhost:3001/api/data/schedule/${data.sid}`,)
        dispatch({ type: 'MEMBERSCHEDULE', data: result.data.data, });

        //SELECT * from DATA TOP 20 E colocar em state.atualizacoes
        //const atualizacoes = await axios(`http://localhost:3001/api/atualizacoes/`,)
        //dispatch({ type: 'ATUALIZACOES', data: atualizacoes.data.data, });

    }

    const log2BD = async (data) => {
        await axios({
          method: 'post',
          url: 'http://localhost:3001/api/atualizacoes',
          data: {
            dia: data.dia,
            hora: data.hora,
            sid: data.sid,
            status: data.status
          }
        })
    
      }

   

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
                            <div key={index}>
                                {(new Date(item.dia).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }))} as {item.hora}:00
                                <input type="button" value="Excluir" onClick={() => updateSchedule(item)}></input>
                            </div>

                        )


                    })}


                </Col>
            </Row>


        </div>)
    }



}