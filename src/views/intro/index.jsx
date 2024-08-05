import styles from './styles.module.css'

const IntroView = ({ introHasBeenShown }) => {
  return (
    <div 
      className={styles.introContainer}
      id={introHasBeenShown ? styles.hideIntro : undefined}
    >
      <h1>Intro</h1>
    </div>
  )
}

export default IntroView
