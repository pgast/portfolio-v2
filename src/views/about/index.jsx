import styles from './styles.module.css'
import { Subtitle, Paragraph } from '../../components/text'
import Button from '../../components/button'
import { workHistory, skillTech, education } from '../../constants/about'

const renderWorkExperience = () => {
  return (
    <div>
      {workHistory.jobs.map((work, index) => (
        <div key={index}>
          <div className={styles.experienceBlockHeader}>
            <div>
              <Subtitle>
                {work.header.title}
              </Subtitle>
              <Paragraph>
                {work.header.company}
              </Paragraph>
            </div>
            <Paragraph>
              {work.header.duration}
            </Paragraph>
          </div>
          <ul className={styles.bulletpoints}>
            {work.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <Paragraph>{item}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const renderSkills = () => {
  const skills = Object.keys(skillTech.skills)
  return (
    <div>
      {skills.map((skillCategory, index) => (
        <div key={index} className={styles.skillsCategory}>
          <Subtitle>
            {skillCategory}
          </Subtitle>
          <div className={styles.skillsGroup}>
            {skillTech.skills[skillCategory].map((skill, idx) => <Button key={idx} label={skill} />)}
          </div>
        </div>
      ))}
    </div>
  )
}

const renderEducation = () => {
  return (
    <div className={styles.educationBlockHeader}>
      <div>
        <div className={styles.educationBlockTitle}>
          <Subtitle>
            {education.school.title}
          </Subtitle>
          <Paragraph>
            {education.school.name}
          </Paragraph>
        </div>
        <Paragraph>
          {education.school.duration}
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          {education.certifications.title}
        </Paragraph>
        <ul className={styles.bulletpoints}>
          {education.certifications.links.map((item, itemIdx) => (
            <li key={itemIdx}>
              <Paragraph>{item.title}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const renderAwardsAndRecognition = () => {
  return (
    <div>
      
    </div>
  )
}

const AboutView = () => { 
  return (
    <div 
      id="about"
      className={styles.container}
    >
      <div className={styles.containerGrid}>
        <div className={styles.leftSection}>
          <div className={styles.fixedLeftHeader}>
            <Subtitle>work experience</Subtitle>
          </div>
          <div className={styles.fixedLeftHeader}>
            <Subtitle>skills</Subtitle>
          </div>
          <div className={styles.fixedLeftHeader}>
            <Subtitle>education</Subtitle>
          </div>
          <div className={styles.fixedLeftHeader}>
            <Subtitle>awards and recognition</Subtitle>
          </div>
        </div>
        <div className={styles.mainSection}>
          {renderWorkExperience()}
          {renderSkills()}
          {renderEducation()}
          {renderAwardsAndRecognition()}
        </div>
      </div>
    </div>
  )
}

export default AboutView
