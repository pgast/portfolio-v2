import styles from "./styles.module.css"
import { Paragraph } from "../text"

const Button = ({ label, hasOutline = true }) => (
  <div 
    className={styles.button}
    style={{ border: hasOutline ? "1px solid white" : "none" }}
  >
    <Paragraph>
      {label}
    </Paragraph>
  </div>
)

export default Button
