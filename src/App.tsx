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

        <p>More posters coming soon...</p>

      </div>

      <Credits />
      </>
  )
}

export default App
