import logo from './logo.svg';
import './App.css';
import Main from './componentes/main';
import { useState,useEffect, use } from 'react';





function App() {
  const [Tarefa,SetTarefa] = useState([])
  
  return (
    <>  
      <Main Tarefa = {Tarefa} SetTarefa = {SetTarefa}></Main>
    </>
  );
}

export default App;
