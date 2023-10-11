import React from 'react';
import Planet from './components/Planet';
import data from './data/data.json'
import Header from './components/Header';
import { Route, Routes } from 'react-router';


function App() {
    
  return (
    <>
      <Header/>
     <Routes>
        <Route path={'/:planet'} element={<Planet/>}>
        </Route>
        <Route path={'/'} element={<Planet/>}> 
              </Route>
     </Routes>
    </>
    );
}

export default App;
