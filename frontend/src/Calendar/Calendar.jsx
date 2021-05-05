import React, { useContext } from 'react';
import { AppContext } from "../App"
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", ptBR);



export default function Calendar() {

    const { state, dispatch } = useContext(AppContext);

    const changeInputValue = (newValue) => {

        dispatch({ type: 'DAYSELECTED', data: newValue.valueOf(), });
        // dispatch({ type: 'HOURSOFDAYSELECTED', data: [],});
        dispatch({ type: 'SHOWHOURS', data: true, });
        dispatch({ type: 'SHOWDETAILS', data: false, });
    };


    return (
        <div className="Calendar">
            <DatePicker
                onChange={changeInputValue}
                locale="pt-BR"
                inline
            />


        </div>
    )
    


}