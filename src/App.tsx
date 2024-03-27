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

      <div className="trailer">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/-8atAUBnxjo?si=GJl06yW8yIvl4ozH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className='poster'>

        <div className='main'>
        <img className='posters' src="mainposter.png" alt="mainposter" />
        </div>

        <div className="main2">
        <img className='posters' src="main2.jpg" alt="mainposter2" />
        </div>
        <div className="azr">
        <img className='posters' src="azr.png" alt="azr" />
        </div>

        <div className="ej">
        <img className='posters' src="ej.png" alt="ej" />
        </div>

        <div className="nik">
        <img className='posters' src="nik.png" alt="nik" />
        </div>

        <p>More posters coming soon...</p>

      </div>

      <Credits />
      </>
  )
}

export default App
