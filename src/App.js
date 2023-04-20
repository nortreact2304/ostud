import './App.css';
import {useState} from 'react'
import Ostud from './Ostud'

function App() {
  const [ostukorv, setOstukorv] = useState([
    { nimetus: 'pirnid', kogus: 1, yhik: 'kg', korvis: true },
    { nimetus: 'leib', kogus: 1, yhik: 'tk', korvis: false },
  ])

  const [toode, setToode] = useState('')
  const [kogus, setKogus] = useState(1)
  const [yhik, setYhik] = useState('tk')

  const lisaOstukorvi = () => {
    const uusToode = {
      nimetus: toode, 
      kogus: kogus,
      yhik: yhik,
      korvis: false
    }
    //ostukorv.push(uusToode) <- nii ei saa lisada et reaktiivsus säliks
    setOstukorv([...ostukorv, uusToode])
  }

  const lisaKlikk = () => {  
    lisaOstukorvi()
    setToode('')
    setKogus(1)
    setYhik('tk')
    console.log(ostukorv)
  }

  const toodeMuutus = (event) => {
    setToode(event.target.value)
  }

  const kustutaToode = (index) => {
    console.log('Kustutame toodet ' + index)
    const uusMassiiv = ostukorv.filter( (ost, i) => {
      return index !== i
    } )
    setOstukorv(uusMassiiv)
  }

  const toggleKasKorvis = (index) => {
    const uusMassiiv = ostukorv.map((ost, i) => {
      if (i != index) {
        return ost
      } else {
        ost.korvis = !ost.korvis
        return {...ost}
      }
    })

    setOstukorv(uusMassiiv)
    console.log(uusMassiiv)
  }

  return (
    <div className="container">
      <div className='row'>
      <input className="col-4" value={toode} onChange={toodeMuutus} placeholder='Toote nimetus' />
      <input
        className='col-2' 
        value={yhik} 
        onChange={(event) => setYhik(event.target.value)}
        placeholder="ühik" 
      />
      <input 
         className='col-2'
        value={kogus} 
        onChange={(event) => setKogus(event.target.value)}
        placeholder="kogus" 
      />
      <button className='col-3' onClick={lisaKlikk}>Lisa</button>

      </div>
      
      <h1>Ostukorv</h1>
      <Ostud 
        ostukorv={ostukorv} 
        kustutaToode={kustutaToode}
        toggleKasKorvis = {toggleKasKorvis}
      />
    </div>
  );
}

export default App;
