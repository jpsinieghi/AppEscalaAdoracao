import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import "./Day.css"


const HORAS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]


export default function Day() {

  const { state, dispatch } = useContext(AppContext);

  const changeInputValue = (newValue) => {

    // dispatch({ type: 'HOURSELECTED', data: newValue,});
    dispatch({ type: 'SHOWDETAILS', data: true, });
    dispatch({ type: 'HOURSELECTED', data: newValue.hora, });

  };


  const [dados, setDados] = useState({ data: [] })
  const fetchData = async () => {
    const result = await axios(`http://localhost:3001/api/data/${state.daySelected}`,)
    setDados(result.data)
    dispatch({ type: 'HOURSOFDAYSELECTED', data: result.data.data, });
  }

  const putData = async (data) => {
    //    
    // const LoaderExampleInlineCentered = () => <Loader active inline='centered' />
    dispatch({ type: 'SHOWHOURS', data: false, });
    // Send a POST request
    await data.map((item, index) => {
      axios({
        method: 'post',
        url: 'http://localhost:3001/api/data',
        data: {
          dia: state.daySelected,
          hora: item,
          sid: 0,
          status: 0
        },
        key: index

      })
    })
  }



  useEffect(() => { fetchData() }, [state.daySelected])
  //console.log(state.daySelected)
  if (!state.showHours) {
    return (<div><h1>
      Escolha uma data no Calendário.
    </h1></div>)
  }
  else {
    if (dados.data.length === 0) {
      dispatch({ type: 'SHOWDETAILS', data: false, })
      return (<div className="Day"><Button primary="true" size="lg" onClick={() => putData(HORAS)}>Criar agenda para este dia</Button></div>)
    } else {
      return (<div className="Day"><div>{(new Date(state.daySelected).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }))}</div>
        {dados.data.map((item, index) => {
          if (item.status === 0) {
            return (
              <div key={index}><Button variant="secondary" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}:00</Button></div>)
          }
          else if (item.status === 1) {
            return (
              <div key={index}><Button variant="warning" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}:00</Button></div>)
          }
          else {
            return (<div key={index}><Button variant="success" size="lg" block onClick={() => changeInputValue(item)}>{item.hora}:00</Button></div>)
          }
        })}
      </div>)
    }
  }
}