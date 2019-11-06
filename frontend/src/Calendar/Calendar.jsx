import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", ptBR); 



export default function Calendar() {
    
    const {state, dispatch} = useContext(AppContext);

    const changeInputValue = (newValue) => {

        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    };



                    return(
                            <div className="Calendar">
                            <DatePicker
                                //value={state.dataEscolhida}
                                onChange={changeInputValue}
                                locale="pt-BR"
                                inline
                                />
                            
               
                            </div>
                    )



}