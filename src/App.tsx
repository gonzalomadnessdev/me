import { useState } from 'react'
import './App.css'
import Users from './components/users/Users';

function App() {
  const [contar, setContar] = useState(0);

  const test = () => {
    setContar((contar) => ++contar)
    console.log(contar)
  }

  return (
    <>
      <Title></Title>
      <div>{contar}</div>
      <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm' onClick={() => test()}>
        aumentar
      </button>
      <Users></Users>
    </>
  )
}

function Title() {
  return (<>
    <h1>TITULO</h1>
  </>)
}

export default App
