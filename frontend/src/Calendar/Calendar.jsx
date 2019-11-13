import React, { useContext } from 'react';
import { AppContext } from "../App"
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", ptBR); 



export default function Calendar() {
    
    const {dispatch} = useContext(AppContext);

    const changeInputValue = (newValue) => {

        dispatch({ type: 'UPDATE_INPUT', data: newValue.valueOf(),});
        dispatch({ type: 'UPDATE_INPUT_HOUR', data: [],});
        dispatch({ type: 'UPDATE_INPUT_VIEW_DAYS', data: false,});
        dispatch({ type: 'UPDATE_INPUT_VIEW_DETAILS', data: false,});
    };


                    return(
                            <div className="Calendar">
                            <DatePicker
                                onChange={changeInputValue}
                                locale="pt-BR"
                                inline
                                />
                            
               
                            </div>
                    )



}