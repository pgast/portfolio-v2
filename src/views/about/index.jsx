import styles from './styles.module.css'
import { ParagraphTitle, Paragraph } from '../../components/text'
import Button from '../../components/button'
import { workHistory, skillTech, education } from '../../constants/about'
import { useEffect, useState } from "react"

const renderWorkExperience = () => {
  return (
    <div id="workExperience" className="aboutSection">
      {workHistory.jobs.map((work, index) => (
        <div key={index}>
          <div className={styles.experienceBlockHeader}>
            <div>
              <ParagraphTitle>
                {work.header.title}
              </ParagraphTitle>
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
    <div id="skills" className="aboutSection">
      {skills.map((skillCategory, index) => (
        <div key={index} className={styles.skillsCategory}>
          <ParagraphTitle>
            {skillCategory}
          </ParagraphTitle>
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
    <div id="education" className={`aboutSection ${styles.educationBlockHeader}`}>
      <div>
        <div className={styles.educationBlockTitle}>
          <ParagraphTitle>
            {education.school.title}
          </ParagraphTitle>
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
    <div id="awardsAndRecognition" className="aboutSection">
      
    </div>
  )
}



const AboutView = () => { 
  const [visibleSections, setVisibleSections] = useState(["workExperience"]);

  useEffect(() => {
    const sections = document.querySelectorAll('.aboutSection');
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prevVisible) => {
          const updatedVisible = [...prevVisible];
  
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add to visible sections if not already included
              if (!updatedVisible.includes(entry.target.id)) {
                updatedVisible.push(entry.target.id);
              }
            } else {
              // Remove from visible sections when fully out of view
              const index = updatedVisible.indexOf(entry.target.id);
              if (index !== -1) {
                updatedVisible.splice(index, 1);
              }
            }
          });
          
          return updatedVisible;
        });
      },
      { threshold: 0.3 }
    );
  
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isDisplayingSection = sectionName => visibleSections[visibleSections.length - 1] === sectionName ? styles.isDisplayingSection : ""
  

  return (
    <div 
      id="about"
      className={styles.container}
    >
      <div className={styles.containerGrid}>
        <div className={styles.leftSection}>
          <div 
            className={styles.fixedLeftHeader} 
            id={isDisplayingSection("workExperience")}
          >
            <ParagraphTitle>work experience</ParagraphTitle>
          </div>
          <div 
            className={styles.fixedLeftHeader} 
            id={isDisplayingSection("skills")}
          >
            <ParagraphTitle>skills</ParagraphTitle>
          </div>
          <div 
            className={styles.fixedLeftHeader} 
            id={isDisplayingSection("education")}
          >
            <ParagraphTitle>education</ParagraphTitle>
          </div>
          <div 
            className={styles.fixedLeftHeader} 
            id={isDisplayingSection("awardsAndRecognition")}
          >
            <ParagraphTitle>awards and recognition</ParagraphTitle>
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
