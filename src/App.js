import React from 'react'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <>
  
   <Router>
     <switch>
       <Route path="/" exact component={Home}/>
       <Route path="/search" exact component={Search}/>
     </switch>
   </Router>
   </>
  );
}

export default App;
