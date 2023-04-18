import './App.css';
import {useState} from 'react'
import Ostud from './Ostud'

function App() {
  const [ostukorv, setOstukorv] = useState([
    { nimetus: 'pirnid', kogus: 1, korvis: false },
    { nimetus: 'leib', kogus: 1, korvis: false },
  ])

  const [toode, setToode] = useState('')

  const lisaOstukorvi = (nimetus, kogus) => {
    const uusToode = {
      nimetus: nimetus, 
      kogus: kogus, 
      korvis: false
    }
    //ostukorv.push(uusToode) <- nii ei saa lisada et reaktiivsus säliks
    setOstukorv([...ostukorv, uusToode])
  }

  const lisaKlikk = () => {  
    lisaOstukorvi(toode, 1)
    setToode('')
    console.log(ostukorv)
  }

  const toodeMuutus = (event) => {
    setToode(event.target.value)
  }

  return (
    <div className="container">
      <input value={toode} onChange={toodeMuutus} />
      <button onClick={lisaKlikk}>Lisa</button>
      <h1>Ostukorv</h1>
      <Ostud ostukorv={ostukorv} />
    </div>
  );
}

export default App;
