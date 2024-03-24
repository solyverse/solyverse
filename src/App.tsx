import BackgroundMusic from './Autoplay'

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


      <div className="creditsto">
        <p className='ewan'>Directed by: Carlo Perez   </p>
        <p className='ewan'>Written by: Jana Balingit   </p>
        <p className='ewan'>Film Editor: Alejandro Lacap, Jana Balingit, Jamilla Lacap   </p>
      </div>
      <div className="lahat"><p id='all'>Carlo Perez, Hera De Castro, Jamilla Lacap, Jade Viray, Jana Balingit, Jobaldene Bayla, Paul Manansala, Evo Tegelan, Nathan Anicete, Xavier Suing, Yuri Espinosa</p></div>
    </>
  )
}

export default App
