import React, { useState,useEffect } from 'react'
import {Container} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Home=(props)=>{
    const[state,setstate] = useState('');
    const [sData, setsData] = useState(['hello']);
    useEffect(()=>{
        setsData(JSON.parse(localStorage.getItem('data')));
    },[])
    console.log(sData);
    //Autocomplete options from localstorage//
  const  save = ()=>{
        var new_data= state;
        if(localStorage.getItem('data')==null){
            localStorage.setItem('data','[]');
        }
        
        var old_data=JSON.parse(localStorage.getItem('data'));
        for(let i =0;i<sData.length;i++){     //code for search elements not to repeat//
            if(sData[i]==new_data){
                    
                return;
            }
        }
        old_data.push(new_data);

        localStorage.setItem('data',JSON.stringify(old_data));
        
    }
    const searchGoogle =  (e) =>{
        e.preventDefault();
        console.log(state);
        save();
        
         props.history.push({pathname:'/search',state});
         
      
        }
    return(
        
        <div className="container">
            <div className="home">
           
                <div className="home_container">
            
                <div className="home_logo">
                <img src="/google.png" alt="Logo"/>

                </div>
        
    <form className="form" onSubmit={searchGoogle}>
     <Autocomplete className="ac"
       
      id="combo-box-demo"
      options={sData}
      //style={{ width:700}}
      renderInput={(params) => <TextField  {...params} 
      onChange={(e)=>setstate(e.target.value)}
      onSelect={(e)=>setstate(e.target.value)}
        value={state}
      
      label="Search Google or Url"
      variant="outlined" />}
    />
    </form>
   

         
        </div>
        </div>
      
      </div>
    )
}

export default Home;