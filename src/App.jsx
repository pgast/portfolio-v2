import './App.css'
import { useEffect, useState } from 'react'

import Navbar from './components/navbar'
import IntroView from './views/intro'
import LandingView from './views/landing'
import WorkView from './views/work'
import AboutView from './views/about'
import ContactView from './views/contact'
import { SectionTitle, Subtitle } from "./components/text"


function App() {
  const [introHasBeenShown, setIntroHasBeenShown] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIntroHasBeenShown(true)
    }, 2000)
  }, [])

  if (!introHasBeenShown) {
    return (
      <>
        <IntroView introHasBeenShown={introHasBeenShown} />
      </>
    )
  }

  return (
    <div id="mainContainer">
      <Navbar />
      <LandingView />

      {/* Mobile Work Header */}
      <div className="fixedHeader">
        <Subtitle>
          Work
        </Subtitle>
      </div>
      <WorkView />

      {/* Mobile About Header */}
      <div className="fixedHeader">
        <Subtitle>
          About
        </Subtitle>
      </div>
      <AboutView />

      {/* Mobile Invisible Header */}
      <div className="fixedHeader invisibleHeader">
      </div>
      <ContactView />
    </div>
  )
}

export default App
