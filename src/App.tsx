import BackgroundMusic from './Autoplay'
import Credits from './Credits'

import './App.css'


function App() {


  return (
    <>
      <div className="title">
          <h1 id='titles'>Ikaw at Ikaw</h1>
          <h5 id="cred">Solyverse Production</h5>
          <BackgroundMusic />
      </div>

      <div className='poster'>

        <div className='main'>
        <img className='posters' src="mainposter.png" alt="mainposter" />
        </div>

        <div className="azr">
        <img className='posters' src="azr.png" alt="ej" />
        </div>

        <div className="ej">
        <img className='posters' src="ej.png" alt="ej" />
        </div>

        <div className="nik">
        <img className='posters' src="nik.png" alt="niko" />
        </div>

      </div>

      <Credits />
      </>
  )
}

export default App
