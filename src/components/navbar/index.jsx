import styles from "./styles.module.css"
import { Subtitle, ParagraphTitle as MenuItem } from "../text"

const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.navbarGrid}>
      <div className={styles.logoContainer}>
        <a href="#landing-section">
          <Subtitle>(pg)</Subtitle>
        </a>
      </div>
      <div className={styles.buttonsContainer}>
        <a href="#work">
          <MenuItem>Work</MenuItem>
        </a>
        <a href="#about">
          <MenuItem>About</MenuItem>
        </a>
        <a href="#contact">
          <MenuItem>Contact</MenuItem>
        </a>
      </div>
    </div>
  </div>
)

export default Navbar
