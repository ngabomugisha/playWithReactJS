import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <div className="App">

    { /* sidebar*/ }
    <Sidebar/>

    { /* main display*/ }
    <Main/>
    </div>
  );
}

export default App;
