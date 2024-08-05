import styles from "./styles.module.css"

const Navbar = () => (
  <div 
    className={styles.container}
  > 
    <a href="#landing-section">
      <h3>pg</h3>
    </a>
    <div className={styles.buttonsContainer}>
      <a href="#work-section">
        <p>Work</p>
      </a>
      <a href="#about-section">
        <p>About</p>
      </a>
      <a href="#contact-section">
        <p>Contact</p>
      </a>
    </div>
  </div>
)

export default Navbar
