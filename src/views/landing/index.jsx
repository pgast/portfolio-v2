import styles from "./styles.module.css"

import { TitleBanner, SectionTitle, Subtitle, ParagraphTitle, Paragraph,  } from "../../components/text"

const LandingView = () => (
  <div
    id="landing-section"
    className={styles.landingContainer}
  >
    <TitleBanner>BANNERS</TitleBanner>
    <SectionTitle>Section title</SectionTitle>
    <Subtitle>Subtitle</Subtitle>
    <ParagraphTitle>Paragraph title</ParagraphTitle>
    <Paragraph>Paragraph</Paragraph>
  </div>
)

export default LandingView
