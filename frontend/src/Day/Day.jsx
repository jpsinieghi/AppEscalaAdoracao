import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"
import Hour from '../Hour/Hour';
import axios from 'axios';


export default function Day() {
   
  const {state, dispatch} = useContext(AppContext);

  

   const [date, setDate] = useState(null)
   const [dados, setDados] = useState({data: []})
  
   const fetchData = async () => {
    
    const result = await axios(
      `http://localhost:3001/api/getData/${state.inputText}`,)
      // `http://localhost:3001/api/getData/1572145200000`,)
      //`https://hn.algolia.com/api/v1/search?query=redux`,)

      setDados(result.data)
      
  }


   useEffect(() => {
    
     fetchData()},[state.inputText])

    return(
            <div className="Day"> 

          
                
                
                {dados.data.map((item, index) => {
                  return (

                    <p>teste</p>
                    
                    // <Hour dados={item} key={index} />
                  
                  
                )})}
          



         

          <p>{state.inputText}</p>
          <p>{date}</p>
              

            </div>

    )
    
}


