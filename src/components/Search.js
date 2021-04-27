import React, { useEffect, useState } from 'react';
import{FaSistrix,FaMicrophone}from "react-icons/fa";
import {Container} from '@material-ui/core'
import Show from "./Show";
import {key ,cx} from '../Api';
import axios from 'axios';
 const Search = (props) =>{
     const goBack=()=>{
         props.history.push("/");
     };
     const [state , setState] = useState(props.location.state ? props.location.state:"");
     const[results , setResults]=useState([]);
     const[info, setInfo]=useState('');

     
     
     const searchGoogle = async(e)=>{
        e.preventDefault();
        const response = await axios(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
        
        );
        
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
        
     }
     useEffect(()=>{
        async function getposts(){
             if(props.location.state){
                const response = await axios(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
        
                );
                
                setResults(response.data.items);
                setInfo(response.data.searchInformation);
                console.log(response);
                
             }
         }
         getposts();
       
  
   
    },[])

     return(
        <div className="search">
       
      
        <div className="search__form">
            <div className="search__form-logo">
                <img src="/small google.png" alt="logo" onClick={goBack}/>
            </div>
            <div className="search__form-input">
            <form  className="home_form" onSubmit={searchGoogle} >
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)}
             className="home_input"  />
                <FaSistrix className="search_icon"/>
                <FaMicrophone className="microphone"/>

            </form>
            </div>  
        </div>
            <Show results={results} info={info}/>
        
    
        </div>
     )
      
     
 };
 
  
 export default Search;