import React, { useState, useEffect } from 'react';
import Hour from '../Hour/Hour';
import axios from 'axios';


export default function Day(props) {
   
  const [date, setDate] = useState(null)
  
  

  useEffect(() => {
  
    setDate(props.dataEscolhida)

    })

    
  
  const [data, setData] = useState({})
  const [hasError, setErrors] = useState(false)
  

  async function fetchData(){
      var url = new URL(`http://localhost:3001/api/getData/${date}`)
      const res = await fetch(url)
      res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err))
    }
    
    useEffect(() => {  
      fetchData()})
  

    return(
            <div className="Day"> 

      <span>{JSON.stringify(data)}</span>


              
             <p> {date}</p>
             
              

            </div>

    )
    
}


