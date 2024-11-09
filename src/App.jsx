import './App.css'
import { useEffect, useState } from 'react'

import Navbar from './components/navbar'
import IntroView from './views/intro'
import LandingView from './views/landing'
import WorkView from './views/work'
import AboutView from './views/about'
import ContactView from './views/contact'

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
      <WorkView />
      <AboutView />
      <ContactView />
    </div>
  )
}

export default App
