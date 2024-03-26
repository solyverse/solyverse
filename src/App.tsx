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

      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcarlo.perez.545%2Fvideos%2F1107956150516559%2F&show_text=false&width=560&t=0" width="560" height="300"  scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
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
